const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Get all applications" });
});

router.post('/', (req, res) => {
    res.json({ message: "Create application" });
});

module.exports = router;