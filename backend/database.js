// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(':memory:');

// db.serialize(() => {
//     db.run("CREATE TABLE trade_data (id INTEGER PRIMARY KEY AUTOINCREMENT, trade_code TEXT, date TEXT, close REAL, volume INTEGER)");

//     const stmt = db.prepare("INSERT INTO trade_data (trade_code, date, close, volume) VALUES (?, ?, ?, ?)");
//     const data = require('./data.json');
//     data.forEach(row => {
//         stmt.run(row.trade_code, row.date, row.close, row.volume);
//     });
//     stmt.finalize();
// });

// module.exports = db;
