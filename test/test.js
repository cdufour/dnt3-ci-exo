const request = require('supertest');
const app = require('../index.js'); // import de l'application express

describe('GET /', () => {
    it('should respond with "Hello for all!"', (done) => {
        request(app).get('/').expect('Hello for all!', done);
    })
})