const express = require("express");
const app = express();

app.get("/api/message", (request, response) => {
  response.json({
    message: "Goodbye world!",
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));