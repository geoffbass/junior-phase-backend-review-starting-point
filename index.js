const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./api'));

const db = require('./models');
const PORT = 3000;
db.sync()
.then(() => {
  console.log('DB synced');
  app.listen(
    PORT,
    () => console.log(`listening for incoming requests on port ${PORT}`)
  )
})
.catch(console.error.bind(console));
