const express = require('express');
const app = express();
const PORT = 3000;

app.enable('trust proxy')
app.get('/', async function (req, res) {

    const resp = await fetch(`https://ipinfo.io/${req.ip}/json`)
    const data = await resp.json()

    res.json({ req_ip: req.ip, data })
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});