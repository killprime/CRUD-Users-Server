const knex = require('./knex'); //connection

module.exports = {
  getAll(perPage, currentPage){
    return knex('users').paginate({ perPage, currentPage, isLengthAwareL: true });
  },
  getOne(id){
    return knex('users').where('id', id).first();
  },
  create(user){

    return knex('users').insert(user, 'id');
  },
  update(id, user){
    return knex('users').where('id', id).returning('*').update(user);
  },
  delete(id){
    return knex('users').where('id', id).del();
  }
}
