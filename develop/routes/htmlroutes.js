// Required Packages for HTML Routes
const router = require('express').Router();
const path = require('path');

// Middleware Get Request Serve index.html to User
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
});