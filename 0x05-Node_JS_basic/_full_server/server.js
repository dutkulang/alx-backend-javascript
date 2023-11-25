const app = require('./routes/index');

const port = 1245;

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
