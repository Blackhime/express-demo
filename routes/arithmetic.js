
var express = require('express');
var router = express.Router();
module.exports = router;

/* GET Addtion. */
router.get('/add', function(req, res) {
	var op1 = parseInt(req.param("op1")), 
	op2 = parseInt(req.param("op2"));
	
	res.render('arithmetic', {layout:false, 
		title: "Addition", 
		op1: op1,
		op2: op2,
		operator : "+",
		result : op1 + op2
	});
});

router.get('/sub', function(req, res) {
	var op1 = parseInt(req.param("op1")), 
	op2 = parseInt(req.param("op2"));
	
	res.render('arithmetic-nolayout', {
		title: "Subtraktion", 
		op1: op1,
		op2: op2,
		operator : "+",
		result : op1 - op2
	});
});