const knex = require('./knex'); //connection

module.exports = {
  getAll(){
    return knex('users');
  },
  getOne(id){
    return knex('users').where('id', id).first();
  },
  create(user){

    let result = knex('users')
      .returning('*')
      .insert(user);

    return result
  },
  update(id, user){
    return knex('users').where('id', id).returning('*').update(user);
  },
  delete(id){
    return knex('users').where('id', id).del();
  }
}
