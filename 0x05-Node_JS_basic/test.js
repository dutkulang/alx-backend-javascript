const { expect } = require('chai');
const sinon = require('sinon');

const countStudents = require('./3-read_file_async.js');

describe('countStudents', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs to the console the right messages', (done) => {
    countStudents('./database.csv').then(() => {
       //console.log(consoleSpy.getCall(0).args)
      expect(consoleSpy.calledWith('Number of students: 10')).to.be.true;
      expect(consoleSpy.calledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')).to.be.true;
      expect(consoleSpy.calledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')).to.be.true;

      done();
      return
    })
    .catch((err) => {
      console.log('error', err)
    });
    // done();
  });
});
