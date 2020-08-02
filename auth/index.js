const crypto = require('crypto');

const encodePassword = (pw) => {
  const buf = crypto.randomBytes(64);
  const salt = buf.toString('base64');
  const key = crypto.pbkdf2Sync(pw, salt, 100000, 64, 'sha512');
  const encodedPw = key.toString('base64');
  return [encodedPw, salt];
};

const decodePassword = (pw, salt) => {
  const key = crypto.pbkdf2Sync(pw, salt, 100000, 64, 'sha512');
  const encodedPw = key.toString('base64');
  return encodedPw;
};

module.exports = {
  encodePassword,
  decodePassword,
};
