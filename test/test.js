var request = require('supertest');
var app = require('../app.js');

describe('GET /a', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world from ob', done);
  });
});


