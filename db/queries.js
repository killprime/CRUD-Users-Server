const knex = require('./knex'); //connection

module.exports = {
  getAll(pageSize, pageNumber){
    const options = {
      perPage: pageSize,
      currentPage: pageNumber,
      isFromStart: false,
      isLengthAwareL: true
    }
    console.log(options);
    return knex('users').paginate(options);
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
