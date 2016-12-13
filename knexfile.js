require('dotenv').config();
    module.exports = {
      development: {
        client: 'pg',
        connection: 'postgres://localhost:5432/product-tester',
        debug: true
      },

      production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + "?ssl=true"
      }
    };
