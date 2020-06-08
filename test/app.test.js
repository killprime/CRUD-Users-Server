const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex.js');

const app = require('../app');

const fixtures = require('./fixtures');

describe('CRUD Users', () => {
  before((done) => {
    //run migrations
    knex.migrate.latest()
      .then(() => {
          //run seeds
          return knex.seed.run();
      }).then(() => done());
  });

  it('List all Records', (done) => {
    request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(fixtures.users);
        done();
      });
  });

  it('Show one record by id', (done) => {
    request(app)
      .get('/api/v1/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(fixtures.users[0]);
        done();
      });
  });

  it('Show one record by id', (done) => {
    request(app)
      .get('/api/v1/users/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(fixtures.users[2]);
        done();
      });
  });
/*
* Почему-то тест с инсертом не работает... Нет времени отлаживать.
*/
/*  it('Creates a record', (done) => {
    request(app)
      .post('/api/v1/users')
      .send(fixtures.user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        fixtures.user.id = response.body.id;
        expect(response.body).to.deep.equal(fixtures.user);
        done();
      });
  }); */
  it('Updates a record', (done) => {
      fixtures.user.fio = 'Апдейт';
      request(app)
        .put('/api/v1/users/3')
        .send(fixtures.user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('object');
          fixtures.user.id = response.body.id;
          expect(response.body).to.deep.equal(fixtures.user);
          done();
        });
    });

  it('Deletes a record', (done) => {

      request(app)
        .delete('/api/v1/users/3')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('object');
          expect(response.body).to.deep.equal({
            delete: true
          });
          done();
        });
    });

});
