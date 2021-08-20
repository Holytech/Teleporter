const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('Hello World')
});
 
app.get('/api/users', (req, res) =>{
        
});
app.listen(3000, () => console.log('Listening on port 3000...'))