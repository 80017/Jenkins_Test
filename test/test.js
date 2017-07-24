var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world from ob', done);
  });
});

describe('POST /', function() {
  it('respond with', function(done) {
    request(app).get('/').expect('hello world from ob', done);
  });
});
