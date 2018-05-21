const express = require('express'),
      router = express.Router(),
      GraphHTTP = require('express-graphql'),
      sum = require('./api/sum'),
      memo = require('./api/memo'),
      schema = require('../graphql'),
      upload = require('../upload');

router.get('/sum/:no', sum);

router.post('/memo', memo.create);
router.get('/memos', memo.selects);
router.get('/memo/:id', memo.select);
router.put('/memo/:id', memo.update);
router.delete('/memo/:id', memo.remove);

router.use('/graphql', GraphHTTP({ schema : schema, pretty : true, graphiql : true }));

router.post('/upload', upload.single, upload.callback);

module.exports = router;