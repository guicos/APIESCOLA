const express    = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || 3000);

  // MIDDLEWARES
  app.use(bodyParser.json());

  consign(module)
    .then('modules/src/presenters')
    .then('modules/src/repository')
    .into(app)

  return app;
};