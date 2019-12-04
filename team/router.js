const { Router } = require("express");
const Team = require("./model");

const router = new Router();
router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => {
      res.send(teams);
    })
    .catch(err => {
      console.log("got here");

      next(err);
    });
});
router.get('/team/:id', (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => {
      res.json(team);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/team", (req, res, next) =>
  Team.create(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      next(err);
    })
);
module.exports = router;
