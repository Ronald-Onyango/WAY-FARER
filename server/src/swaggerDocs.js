const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  info: {
    title: 'WayFarer',
    version: '1.0.0',
    description: 'WayFarer is a public bus transportation booking service.',
  },
};

const options = {
  swaggerDefinition,
  apis: [`${__dirname}/routes/users.js`],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = (app) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
