import * as dotenv from 'dotenv';
import * as env from 'env-var';



export const config = {
  server: {
    name: 'primes-crud',
    port: env.get('APPLICATION_PORT')
    .default(1234)
    .asString()
  },
  db: {
    connectionString: env.get('DB_CONNECTION_URL')
      .default('mongodb://localhost:27017')
      .asString(),
    dbName: env.get('PRIME_DB_NAME')
      .default('primes-crud')
      .asString(),
  },
};

dotenv.config();
