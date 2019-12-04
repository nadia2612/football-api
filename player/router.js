const Player = require('./model')
const { Router } = require("express");

const router = new Router();
router.get("/player", (req, res, next) => {
  Player.findAll()
    .then(players => {
      res.send(players);
    })
    .catch(err => {
      console.log("got here");

      next(err);
    });
});

router.get("/player/:id", (req, res, next) => {
  Player.findByPk(req.params.id)
    .then(player => {
      res.json(player);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/player", (req, res, next) =>
  Player.create(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      next(err);
    })
);

module.exports = router;
