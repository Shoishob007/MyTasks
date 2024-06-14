const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/data', (req, res, next) => {
    db.all('SELECT * FROM trade_data', [], (err, rows) => {
        if (err) {
            next(err);
        } else {
            res.json(rows);
        }
    });
});

router.post('/data', (req, res, next) => {
    const { trade_code, date, close, volume } = req.body;
    db.run('INSERT INTO trade_data (trade_code, date, close, volume) VALUES (?, ?, ?, ?)', [trade_code, date, close, volume], function (err) {
        if (err) {
            next(err);
        } else {
            res.json({ id: this.lastID });
        }
    });
});

router.put('/data/:id', (req, res, next) => {
    const { id } = req.params;
    const { trade_code, date, close, volume } = req.body;
    db.run('UPDATE trade_data SET trade_code = ?, date = ?, close = ?, volume = ? WHERE id = ?', [trade_code, date, close, volume, id], function (err) {
        if (err) {
            next(err);
        } else {
            res.json({ message: 'Update successful' });
        }
    });
});

router.delete('/data/:id', (req, res, next) => {
    const { id } = req.params;
    db.run('DELETE FROM trade_data WHERE id = ?', [id], function (err) {
        if (err) {
            next(err);
        } else {
            res.json({ message: 'Delete successful' });
        }
    });
});

module.exports = router;
