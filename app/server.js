const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.static("pages", { extensions: ["html"] }));
app.use(express.static("public", { extensions: ["html"] }));
app.use(express.static("styles", { extensions: ["html"] }));


app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '/pages'));
  res.redirect(307, "index.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});