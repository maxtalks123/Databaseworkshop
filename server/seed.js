import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    message TEXT
)
`);

const insertStatement = db.prepare(`
INSERT INTO messages (name, message) VALUES (?, ?)
`);

insertStatement.run("Spongebob", "Hello world");
insertStatement.run("Patrick", "Hi Spongebob");
insertStatement.run("Squidward", "I hate you both");

// add movies in to database
//get return by same id or year
