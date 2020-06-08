const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const environmentConfig = config[environment];
const knex = require('knex');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

const connection = knex(environmentConfig);

module.exports = connection;
