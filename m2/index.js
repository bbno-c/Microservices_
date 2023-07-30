const { consumeFromQueue, publishToQueue } = require('./shared/rabbitmq');

// Function to process the task and publish the result back to RabbitMQ
async function processTask(task) {
  console.log('Processing task:', task);

  // Task processing logic here
  // For example, let's assume we are performing some computation on task.data
  const result = task.data * 2; // Just a simple example, replace with your actual processing logic

  // Publishing the result back to RabbitMQ
  const resultData = { taskId: task.taskId, result }; // Assuming the result contains the taskId
  await publishToQueue('result_queue', resultData);

  return result;
}

// Consume tasks from RabbitMQ
consumeFromQueue('task_queue', async (task) => {
  try {
    const result = await processTask(task);

    console.log('Task processing complete. Result:', result);
  } catch (error) {
    console.error('Error processing the task:', error);
  }
});
