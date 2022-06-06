import { Server } from 'jayson';


const server = new Server({
    multiplication: function(args: any, callback: any) {
    callback(null, args[0] * args[1]);
  }
});

server.http().listen(3000);