const express = require('express');
const router = express.Router();
const validateApiToken = require('../middleware/validate-api-token.js');
const validateRequest = require('../middleware/validate-request.js');
const makeCallback = require('../express-callback/index.js');

const configLogController = require('../controllers/configLogController.js');


//Get the configuration log
router.get('/config-log', validateApiToken, makeCallback(configLogController.getConfigLog));

//Get all configuration parameters with details
router.get('/config-params', validateRequest, makeCallback(configLogController.getConfigParameters));

//Add a new configuration parameter
router.post('/config-params', validateRequest, makeCallback(configLogController.postConfigLogParameter));

//Modify an existing configuration parameter
router.put('/config-params', validateRequest, makeCallback(configLogController.putConfigLogParameter));

//Delete an existing configuration parameter
router.delete('/config-params/:parameterKey', validateRequest, makeCallback(configLogController.deleteConfigLogParameter));


router.use(makeCallback(configLogController.notFound));

module.exports = router;
