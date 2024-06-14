const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, '../data.json');

const readData = () => {
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
};

const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

router.get('/data', (req, res, next) => {
    try {
        const data = readData();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post('/data', (req, res, next) => {
    try {
        const data = readData();
        const newItem = { id: data.length + 1, ...req.body };
        data.push(newItem);
        writeData(data);
        res.json(newItem);
    } catch (err) {
        next(err);
    }
});

router.put('/data/:id', (req, res, next) => {
    try {
        const data = readData();
        const { id } = req.params;
        const index = data.findIndex(item => item.id === parseInt(id));

        if (index !== -1) {
            data[index] = { id: parseInt(id), ...req.body };
            writeData(data);
            res.json({ message: 'Update successful' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (err) {
        next(err);
    }
});

router.delete('/data/:id', (req, res, next) => {
    try {
        const data = readData();
        const { id } = req.params;
        const newData = data.filter(item => item.id !== parseInt(id));
        writeData(newData);
        res.json({ message: 'Delete successful' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;