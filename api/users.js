const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next){
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validUser(user){
  const hasFio = typeof user.fio == 'string' && user.fio.trim() != '';
  const hasTel = typeof user.tel == 'string' && user.tel.trim() != '';
  return hasFio && hasTel;
}

router.get('/', (req, res) => {
  queries.getAll().then(users => {
    res.json(users);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(user => {
    if(user){
      res.json(user);
    }else{
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if(validUser(req.body)){
    queries.create(req.body).then(users => {
      res.json(users[0]);
    });
  } else {
    next(new Error('Invalid user'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validUser(req.body)){
    //update the user
    queries.update(req.params.id, req.body).then(users => {
      res.json(users[0]);
    })
  }else{
    next(new Error('Invalid user'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      delete: true
    });
  });
});

module.exports = router;
