const express= require('express');
const router = express.Router();

router.get('/api/posts/test', (req,res) =>{

    res.json({msg: 'posts working !'});
});

module.exports= router;