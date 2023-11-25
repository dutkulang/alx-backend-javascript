const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('./database.csv')
      .then((data) => {
        const fieldMap = data;
        let str = 'This is the list of our students';
        for (const key in fieldMap) {
          if (key) {
            const ar = fieldMap[key];
            str += `\nNumber of students in ${key}: ${ar.length}. List: ${ar.join(', ')}`;
          }
        }
        response.send(str);
      })
      .catch(() => {
        response.status(500);
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase('./database.csv')
      .then((data) => {
        const ar = data[major];
        const str = `List: ${ar.join(', ')}`;
        response.send(str);
      })
      .catch(() => {
        response.status(500);
        response.send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
