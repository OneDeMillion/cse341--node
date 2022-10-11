const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for creating, updating, and deleting contact information',
  },
  host: '',
  schemes: ['http', 'https'],
};

const outputFile = 'swagger-output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);