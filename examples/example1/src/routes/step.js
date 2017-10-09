const router = require('express').Router();

router.get("/", function(req, res, next){
    setTimeout(()=>res.send(), 1e3);
})

module.exports = router;