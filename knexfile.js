// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:123456@localhost/my_crud_db'
  },
  test: {
    client: 'pg',
    connection: 'postgres://postgres:123456@localhost/test_my_crud_db'
  },

};
