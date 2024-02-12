// Required Packages for Server
const exp = require('constants');
const apiRoutes = require('./develop/routes/apiroutes');
const htmlRoutes = require('./develop/routes/htmlroutes');
const express = require('express');
const noteTaker = express ();

// PORT Data
const PORT = process.env.PORT || 3001;

noteTaker.use(express.urlencoded({extended:false}));
noteTaker.use(express.json());
noteTaker.use(express.static('public'));
noteTaker.use(htmlRoutes);
noteTaker.use(apiRoutes);

noteTaker.listen(PORT, () => {
    console.log(`Note Taker listening at http://localhost:${PORT}`);
});