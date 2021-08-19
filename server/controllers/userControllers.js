class UserController {
  async check(req, res) {
    const query = req.query;
    res.json({ message: "test" });
  }
}

module.exports = new UserController();
