const Pool = require('./pool');
const encodePassword = require('../auth/index').encodePassword;
const GET_USER_INFO = 'SELECT * FROM USER WHERE USER_ID = ?';
const SIGN_UP = 'INSERT INTO USER (user_id,user_pw,name,salt) VALUES (?,?,?,?)';

class SignUpController {
  constructor() {}

  async get(req, res, next) {
    res.render('signUp');
  }

  async signUp(req, res, next) {
    const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const connection = await Pool.getConnection();
    let [rows] = await connection.execute(GET_USER_INFO, [id]);
    if (rows.length > 0) {
      res
        .status(409)
        .json({
          message: 'duplicate ID',
          success: false,
        })
        .end();
      return;
    }
    const [encodedPw, salt] = encodePassword(password);
    [rows] = await connection.execute(SIGN_UP, [id, encodedPw, name, salt]);
    res.send({ success: true });
  }
}

module.exports = SignUpController;
