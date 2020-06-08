
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('fio').notNullable();
    table.text('tel').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
