const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Get all students" });
});

router.post('/', (req, res) => {
    res.json({ message: "Create student" });
});

module.exports = router;