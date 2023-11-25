const fs = require('fs');

function res(data) {
  const content = data.trim();
  const contentLines = content.split('\n');
  contentLines.splice(0, 1);
  const fieldMap = {};
  for (const item of contentLines) {
    if (item) {
      const splittedItem = item.split(',');
      const field = splittedItem[3];
      const fn = splittedItem[0];
      if (fieldMap[field]) {
        fieldMap[field].push(fn);
      } else {
        fieldMap[field] = [];
        fieldMap[field].push(fn);
      }
    }
  }
  return fieldMap;
}

function readDatabase(fileName) {
  return new Promise((resolve, reject) => fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    }
    // res(data);
    resolve(res(data));
  }));
}

// export default readDatabase;
module.exports = readDatabase;
