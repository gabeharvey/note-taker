// Required Packages for API Routes
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Middleware Get Request for db.json file
router.get ('/api/notes', async (req, res) => {
    const dbApi = await JSON.parse(fs.readFileSync('db/db.json','utf8'));
    res.json(dbApi);
});

// Middleware Post Request for db.json file
router.post ('/api/notes', (req, res) => {
    const dbApi = JSON.parse(fs.readFileSync('db/db.json','utf8'));
    const bizStrat = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbApi.push(bizStrat);
    fs.writeFileSync('db/db.json',JSON.stringify(dbApi));
    res.json(dbApi);
});

// Middleware Delete Request for db.json file
router.delete ('api/notes/:id', (req, res) => {
    let gen = fs.readFileSync('db/db.json','utf8');
    const genInfo = JSON.parse(gen);
    const modInfo = genInfo.filter((note) => {
        return note.id != req.params.id;
    });
    fs.writeFileSync('db/db.json',JSON.stringify(modInfo));
    res.json('Data Removed!');
});

// Export Router Data
module.exports = router;