const express= require('express');
const router = express.Router();

router.get('/api/profile/test', (req,res) =>{

    res.json({msg: 'profile working !'});
});

module.exports= router;