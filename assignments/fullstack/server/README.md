# Echobot RESTful API server

### Backend

A Production Grade RESTful API using Node.js, Express.js and Socket.io with versioning support.

# Features

- **Messaging**: Instant messaging and chat using [Socket.IO](https://socket.io/).
- **Validation**: Validation using [Joi](https://github.com/sideway/joi).
- **Logging**: Using [winston](https://www.npmjs.com/package/winston) and [morgan](https://www.npmjs.com/package/morgan)
- **Error Handling**: Centralized error handling using [express-async-errors](https://www.npmjs.com/package/express-async-errors).
- **Paths Transformation**: Uses absolute paths instead of relative paths using [module-alias](https://www.npmjs.com/package/module-alias).
- **API Documentation**: Using [swagger](https://www.npmjs.com/package/swagger-ui-express) and [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc).
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://www.npmjs.com/package/cors)
- **Compression**: gzip compression with [compression](https://www.npmjs.com/package/compression)
- **Testing**: Testing using [Jest](https://github.com/facebook/jest) and [SuperTest](https://github.com/visionmedia/supertest).


## Getting Started

```bash
# Get the latest snapshot
git clone https://github.com/chatlayerai/chatlayer-code-tests.git

# Change directory
cd chatlayer-code-tests/assignments/fullstack/server

# Make sure to set env variables
cp .env.dev .env && vi .env

# Install NPM dependencies
npm install --save-dev

# Try testing - this should be successful!
npm test

# Then simply start your app
npm start

# Running in dev environment
npm run dev

# Running in prod environment
npm run prod
```

## How to use (with Postman)

1. **Check if working**  
GET request  

```text
localhost:8080/api/v1/
```