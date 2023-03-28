const express = require('express');

const app = express ();

app.use(express.json());

const PORT =3618;

app.get('/',(req, res)=> {
    console.log ("New request");
    res.status(200).json({status: true});
});

app.listen(PORT, () => {
    console.log("Server is running");
});