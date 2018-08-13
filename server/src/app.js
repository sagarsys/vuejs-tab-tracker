const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const { sequelize } = require('./models');
const config = require('./config/config');
const routes = require('./routes');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

routes(app);

sequelize.sync()
  .then(() => {
      app.listen(config.port);
      console.log(`App listening on port ${config.port}`);
  });
