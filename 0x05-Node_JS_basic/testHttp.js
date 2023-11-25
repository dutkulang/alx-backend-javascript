const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';

import app from './full_server/server';

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {

  describe('/students/:major endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('Returns the right content', (done) => {
        chai.request(app)
          .get('/students/SWE')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.equal(`List: Guillaume, Joseph, Paul, Tommy`);
            done();

          });
      });
    });
  });
});

describe('Full HTTP server using Express', () => {

  describe('/students endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('Returns the right content', (done) => {
        chai.request(app)
          .get('/students')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.have.string(`This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`);
            done();

          });
      });
    });
  });
});

describe('Full HTTP server using Express', () => {
  describe('When the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    })
    it('Returns the right error message', (done) => {
      chai.request(app)
        .get('/students/SWE')
        .end((error, response) => {
          chai.expect(response.text).to.equal(`Cannot load the database`);
          done();
        });
    });
  });
});
