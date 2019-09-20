const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello for all!');
})

// TODO : vérifier définition de la variable d'ENV depuis Gitlab
app.listen(process.env.PORT || 3000);

module.exports = app;
