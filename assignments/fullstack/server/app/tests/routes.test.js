require('module-alias/register')
const express = require("express");
const bodyParser = require('body-parser');
const request = require("supertest");
const AppRouter = require('@routes');

const app = express();
app.use(bodyParser.json());

app.use('/api', AppRouter);

describe('testing-server-routes', () => {
  it('GET /api/v1 - success', async () => {
    const { body } = await request(app).get('/api/v1'); 
    expect(body).toEqual({ response: 'Server is up and running.' });
  });
});
