const Pool = require('./pool');
const decodePassword = require('../auth').decodePassword;
const GET_USER_INFO = 'SELECT * FROM USER WHERE USER_ID = ?';

class SessionController {
  constructor() {}
  async signIn(req, res, next) {
    const id = req.body.id;
    const password = req.body.password;
    const connection = await Pool.getConnection();
    const [rows] = await connection.execute(GET_USER_INFO, [id]);
    if (rows.length === 0) {
      res
        .status(409)
        .json({
          message: 'incorrect username',
          success: false,
        })
        .end();
      return;
    }
    const decodePw = decodePassword(password, rows[0].salt);
    if (decodePw !== rows[0].user_pw) {
      res
        .status(409)
        .json({
          message: 'incorrect password',
          success: false,
        })
        .end();
      return;
    }
    req.session.user = rows[0];
    res.send({ success: true });
  }
  signOut(req, res, next) {
    req.session.destroy();
    res.send({ success: true });
  }
}

module.exports = SessionController;
