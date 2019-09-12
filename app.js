const express = require ('express') ;

var app = express() ;

app.use('/',(req,res)=>{
res.send('Hello Ritesh')
    
})

const PORT = process.env.PORT || 4200 ;

app.listen(PORT) ;
