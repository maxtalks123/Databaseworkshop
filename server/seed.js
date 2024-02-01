import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    message TEXT
    imgURL TEXT
)
`);

const insertStatement = db.prepare(`
INSERT INTO messages (name, message, imgURL) VALUES (?, ?, ?)
`);

insertStatement.run(
  "Spongebob",
  "Hello world",
  "https://images.unsplash.com/photo-1627796795540-18e2db6d3908?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
insertStatement.run("Patrick", "Hi Spongebob");
insertStatement.run("Squidward", "I hate you both");

// add movies in to database
//get return by same id or year
