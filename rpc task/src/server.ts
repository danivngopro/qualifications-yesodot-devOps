import { Server } from 'jayson';

const server = new Server({
  multiplication: function (args: any, callback: any) {
    callback(null, parseInt(args[0]) * parseInt(args[1]));
  },
});

server.http().listen(3000);