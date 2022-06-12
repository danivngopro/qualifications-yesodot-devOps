import express from 'express';
import client from './client';

const app = express();

app.get('/numbers', (req: express.Request, res: express.Response) => {
  const { number1, number2 } = req.query;
  client.request('multiplication', [number1, number2], function (err: any, response: any) {
    if (err) throw err;
    console.log(response.result); 
    res.end(`${response.result}`);
  });
});

app.listen(3030);




