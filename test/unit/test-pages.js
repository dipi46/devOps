var expect  = require('chai').expect;
var request = require('request');

it('helloworld page example', function(done) {
    request('http://localhost:3000/helloworld' , function(error, response, body) {
        expect(body).to.equal("<!DOCTYPE html><html><body>'Hello, World!'</body></html>");
        done();
    });
});