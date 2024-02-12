// Required Packages for API Routes
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Middleware Get Request for db.json file
router.get ('/api/notes', async (req, res) => {
    const dbApi = await JSON.parse(fs.readFileSync('db/db.json','utf-8'));
    res.json(dbApi);
});