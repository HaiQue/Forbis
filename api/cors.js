const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/fetch_data", async (req, res) => {
  try {
    const response = await axios.get(req.query.url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error in fetching data");
  }
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
