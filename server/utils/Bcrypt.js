const bcrypt = require("bcrypt");
class Bcrypt {
  constructor(props) {
    this.salfRounds = +process.env.SALT_ROUNDS;
    this.password = props.password || null;
    this.hashPassword = props.hashPassword || null;
  }

  async hash() {
    return await bcrypt.hash(this.password, this.salfRounds);
  }

  async decoded() {
    return await bcrypt.compare(this.password, this.hashPassword);
  }
}
module.exports = Bcrypt;
