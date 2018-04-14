const express = require ('express');
const app = express();

app.listen(4000);

app.get('/company',function(req,res){
    res.json({ title:'company'});
});