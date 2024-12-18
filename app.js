const express = require("express");
const app = express();
const port = 3000;

const posts = require("./posts")

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.send('Server del mio blog');
})

app.get('/bacheca', (req, res) => {
    const post = {
        postsCounter: posts.length,
        postList: posts
    };
    res.json(post) 
})

app.listen(port, err => {
    
})

