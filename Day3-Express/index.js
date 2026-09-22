import dotenv from "dotenv";
import express from "express";
dotenv.config()

const app = express();

const port = process.env.PORT||3000;

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hey Bruder");
});

//params
app.get("/app", (req, res) => {
  res.send("App Route");
});
app.get("/app/:pagename/:pageId", (req, res) => {
  const { pagename, pageId } = req.params;
  res.send(`<h1>On the page ${pagename},${pageId}</h1>`);
  console.log(pagename, pageId);
});

//query

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("<h1>No query</h1>");
  } else {
    res.send(`<h1>Query is ${q}</h1>`);
    console.log("Query is ",q);
  }
});


