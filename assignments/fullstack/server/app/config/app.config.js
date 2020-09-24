const dotenv = require('dotenv');
const path = require('path');
const Joi = require('@hapi/joi');

// Load environment variables from .env file.
dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVariablesSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development')
      .default('development'),
    PORT: Joi.number().default(8080)
  })
  .unknown();

const { value: configVars, error } = envVariablesSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  port: configVars.PORT,
  env: configVars.NODE_ENV,
};
