const express = require('express');
const router = express.Router();

function testMiddleware(req, res, next) {
	console.log('첫번쨰 미들웨어');
	next();
}

function testMiddleware2(req, res, next) {
	console.log('두번쨰 미들웨어');
	next();
}

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
	res.send('admin 이후 url');
})

router.get('/products', (_, res) => {
	res.render('admin/products.html', 
		{ message : "hello" }
	);
});

router.get('/products/write', ( req, res ) => {
	res.render('admin/write.html');
})

router.post('/products/write', (req, res) => {
	res.send(req.body.name)
})

module.exports = router;