// Required Packages for HTML Routes
const router = require('express').Router();
const path = require('path');

// Middleware Get Request Serve index.html to User
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

// Middleware Get Request Serve notes.html to User
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});

// Export Router Data
module.exports = router;