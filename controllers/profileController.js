const connection = require("../connection");
const con = connection();



const getProfile = (req, res) => {
  const user_id = req.user_id;
  con.query(
    "SELECT * FROM users WHERE user_id = ?",
    [user_id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      res.json({ profile: result[0] });
    }
  );
};

module.exports = {

  getProfile,
};
