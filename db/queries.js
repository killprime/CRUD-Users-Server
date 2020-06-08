const knex = require('./knex'); //connection

module.exports = {
  getAll(){
    return knex('users');
  },
  getOne(id){
    return knex('users').where('id', id).first();
  },
  create(user){

    return result = knex('users').insert(user, 'id');
  },
  update(id, user){
    return knex('users').where('id', id).returning('*').update(user);
  },
  delete(id){
    return knex('users').where('id', id).del();
  }
}
