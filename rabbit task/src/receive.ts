import amqp from "amqplib";
import fs from 'fs';

const queueName = 'TestName';

async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        await channel.assertQueue(queueName);

        channel.consume(queueName, message => {
            if(message){
                const input = JSON.parse(message.content.toString());
                console.log(input);
                channel.ack(message);
                fs.appendFile("./mytext.txt", input, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
            }
        })

        console.log(`Waiting for messages from queueName: ${queueName}`);
    }
    catch (ex) {
        console.error(ex);
    }
}

connect();