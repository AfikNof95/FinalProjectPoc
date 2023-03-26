const router = require("express").Router();
const match = require("./model/match");
const landlords = require("./mock/landlords.json");
router.post("/match", (req, res, next) => {
  const { answers, priority } = req.body;
  const matchPercentage = [];
  for (let landlord of landlords.landlords) {
    matchPercentage.push({
      landlord: landlord.name,
      match: match({ answers, priority }, landlord),
    });
  }

  res.send(matchPercentage);
});

module.exports = router;
