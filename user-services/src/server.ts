import app from "./app";
import dotenv from "dotenv";
import { Kafka } from "kafkajs";

dotenv.config();
const PORT = process.env.PORT || 5001;

// Kafka Consumer Setup
const kafka = new Kafka({ brokers: ["kafka:9092"] });
const consumer = kafka.consumer({ groupId: "user-group" });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-events", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (message && message.value) {
        console.log(`Received Message: ${message?.value.toString()}`);
      }
    },
  });
}

startConsumer().catch(console.error);

app.listen(PORT, () => {
  console.log(`product Service is running on port ${PORT}`);
});
