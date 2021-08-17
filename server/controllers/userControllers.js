class UserController {
  async registrationUser(req, res) {
    res.json();
  }
  async authorizationUser(req, res) {
    res.json();
  }

  async check(req, res) {
    const query = req.query;
    res.json({ message: "test" });
  }
}

module.exports = new UserController();
