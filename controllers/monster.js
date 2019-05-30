var Monster = require("../daos/monster")

module.exports.createMonster = (req, res, next) => {
  var monsterParams = {
    name: req.body.name, 
    description: req.body.description
  }

  Monster.create(monsterParams, (err, monster) => {
    if(err){
      res.json({
        error: err
      })
    }

    res.json({
      message: "Monster created successfully"
    })
  })
}

exports.getMonsters = function(req, res, next) {
    Monster.get({}, function(err, monsters) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            monsters: monsters
        })
    })
}

exports.getMonster = function(req, res, next) {
    Monster.get({name: req.params.name}, function(err, monsters) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            monsters: monsters
        })
    })
}

exports.updateMonster = function(req, res, next) {
    var monster = {
        name: req.body.name,
        description: req.body.description
    }
    Monster.update({_id: req.params.id}, monster, function(err, monster) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Monster updated successfully"
        })
    })
}

exports.removeMonster = function(req, res, next) {
    Monster.delete({_id: req.params.id}, function(err, monster) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Monster deleted successfully"
        })
    })
}
