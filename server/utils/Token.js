const jwt = require("jsonwebtoken");
class Token {
  constructor(props) {
    this.secretCode = process.env.JWT_SECRET_KEY;
    this._id = props._id || null;
    this.token = props.token || null;
    this.expiryCookies = new Date(Date.now() + 60 * 60 * 1000);
    this.expiryToken = "1h";
  }

  create() {
    return jwt.sign({ _id: this._id }, this.secretCode, {
      expiresIn: this.expiryToken,
    });
  }

  decoded() {
    return jwt.verify(this.token, this.secretCode);
  }
}
module.exports = Token;
