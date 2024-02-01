import Database from "better-sqlite3";
const db = new Database("database.db");
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.listen("1235", () => {
  console.log("my salmon are not swimming in port 1235");
});

const messages = db.prepare("SELECT * FROM messages").all();
console.log("messages", messages);

app.get("/name", (request, response) => {
  try {
    if (request.query.id) {
      let querySelect = db
        .prepare("SELECT * FROM messages WHERE id = ?")
        .all(req.query.id);
      response.status(200).json(querySelect);
      return;
    }
  } catch (err) {
    response.status(500).json(err);
  }
});

app.post("/name", (request, response) => {
  try {
    const name = request.body.name;
    const message = request.body.message;
    const url = request.body.url

    const newName = db
      .prepare(`INSERT INTO messages (name, message, url) VALUES (?,?,?)`)
      .run(name, message, url);
    response.status(200).json(newName);
    return;
  } catch (err) {
    response.status(500).json(err);
  }
});

//can write a post request to get info from get request. req.body. try/catch and error.

//go client side and create form on html with 2 fields.
