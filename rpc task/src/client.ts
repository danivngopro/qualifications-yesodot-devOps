import { Client } from 'jayson';

const client = Client.http({
  port: 3000
});

export default client;