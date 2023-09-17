const express = require('express');
const app = express();
const port = 3000;

app.set("view engine","ejs");

const user={
    fname:"Ajoy",
    lname:"Ali",
    admin:true
}

app.get('/', (req, res) => {
    res.render("./pages/index",{user:user})
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));