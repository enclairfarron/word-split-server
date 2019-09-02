var express = require('express');
var router = express.Router();
var nodejieba = require("nodejieba");

/* GET home page. */
router.get('/cut', function (req, res, next) {
    var p = req.query.p;
    var result = nodejieba.cut(p);
    var tag = nodejieba.tag(p);
    var json = {
        statusCode:200,
        msg:'ok',
        data:{
            word:result,
            tag:tag
        }
    };
    res.json(json);
});

module.exports = router;
