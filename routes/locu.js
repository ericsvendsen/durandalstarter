var express = require('express'),
    request = require('request'),
    router = express.Router();

router.post('/locations', function (req, res) {
    req.body['api_key'] = '1a27ccf6d8689ab4b1a62f852632e4fa687442dd'; // add the api key to the request
    request.post('https://api.locu.com/v2/venue/search', { json: req.body }, function (err, response, body) {
        res.json(body);
    });
});

module.exports = router;