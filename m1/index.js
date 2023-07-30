const express = require('express');
const { publishToQueue, consumeFromQueue } = require('./shared/rabbitmq');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/process', async (req, res) => {
  // Assuming the request body contains the necessary task data
  const taskData = req.body;

  // Publish the task to RabbitMQ
  publishToQueue('task_queue', taskData);

  // Wait for the task execution result from RabbitMQ
  const resultData = await new Promise((resolve) => {
    consumeFromQueue('result_queue', (result) => {
      resolve(result);
    });
  });

  res.json({ result: resultData.result });
});

app.listen(PORT, () => {
  console.log(`Microservice M1 listening on port ${PORT}`);
});
