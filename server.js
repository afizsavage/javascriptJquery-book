const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

//set static folder
app.use(express.static(path.join(__dirname, 'javascriptJquery')));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));  