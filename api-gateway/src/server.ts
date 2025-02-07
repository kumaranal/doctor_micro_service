import express from "express";
import expressProxy from "express-http-proxy";
import { Kafka } from "kafkajs";

//kafka
const kafka = new Kafka({ brokers: ["kafka:9092"] });
const producer = kafka.producer();

async function connectProducer() {
  await producer.connect();
  console.log("Kafka Producer Connected");
}

connectProducer();
//

const app = express();
app.use(express.json());
app.use("/users", expressProxy("http://user-services:5001"));
app.use("/demo", expressProxy("http://google.com"));
app.use("/products", expressProxy("http://product-services:6001"));

// Publish an event to Kafka
app.post("/publish", async (req, res) => {
  const { topic, message } = req.body;

  try {
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    res.json({ success: true, message: "Message sent to Kafka!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        error: (error as Error)?.message || "Unknown error",
      });
  }
});

app.listen(3000, () => {
  console.log("Gateway server listening on port 3000");
});
