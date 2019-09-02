const express = require ('express') ;

var app = express() ;

app.use('/',(req,res)=>{
res.send('Hello World')
    
})

const PORT = process.env.PORT || 4200 ;

app.listen(PORT) ;
