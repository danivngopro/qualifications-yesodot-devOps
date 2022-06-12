import express from 'express';
import amqp from 'amqplib';

const queueName = 'TestName';
const app = express();

async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        await channel.assertQueue(queueName);

        // app.post('/',  (req: express.Request, res: express.Response) =>{

        // const body = req.body;
        channel.sendToQueue(queueName, Buffer.from(JSON.stringify('test')));
        console.log(`message sent`);
    }
    catch (ex) {
        console.error(ex);
    }
}



app.listen(3000);
connect()