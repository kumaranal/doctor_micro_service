import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});
