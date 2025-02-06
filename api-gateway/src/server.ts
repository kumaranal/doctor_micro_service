import express from "express";
import expressProxy from "express-http-proxy";

const app = express();

app.use("/users", expressProxy("http://localhost:5001"));
app.use("/demo", expressProxy("http://google.com"));
app.use("/products", expressProxy("http://localhost:6001"));

app.listen(3000, () => {
  console.log("Gateway server listening on port 3000");
});
