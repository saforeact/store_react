const jwt = require("jsonwebtoken");
class Token {
  constructor(props) {
    this.secretCode = process.env.JWT_SECRET_KEY;
    this._id = props._id || null;
    this.token = props.token || null;
  }

  create() {
    return jwt.sign({ _id: this._id }, this.secretCode);
  }

  decoded() {
    return jwt.verify(this.token, this.secretCode);
  }
}
module.exports = Token;
