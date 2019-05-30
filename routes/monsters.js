var Monster = require("../controllers/monster")

module.exports = function(router) {
  router.get("/", Monster.getMonsters);
  router.post('/create', Monster.createMonster);
  router.get('/get/:name', Monster.getMonster);
  router.put('/update/:id', Monster.updateMonster);
  router.delete('/remove/:id', Monster.removeMonster);
};
