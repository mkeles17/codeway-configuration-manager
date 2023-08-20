const {
    listConfigLog,
    listConfigParameters, 
    createConfigLogParameter,
    modifyConfigLogParameter,
    removeConfigLogParameter
} = require('../use-cases/configLogService.js');

const makeGetConfigLog = require('./get-config-log.js');
const makeGetConfigParameters = require('./get-config-parameters.js')
const makePostConfigLogParameter = require('./post-config-log-parameter.js');
const makePutConfigLogParameter = require('./put-config-log-parameter.js');
const makeDeleteConfigLogParameter = require('./delete-config-log-parameter.js');
const notFound = require('./not-found.js');
    
const getConfigLog = makeGetConfigLog({ listConfigLog });
const getConfigParameters = makeGetConfigParameters({ listConfigParameters });
const postConfigLogParameter = makePostConfigLogParameter({ createConfigLogParameter });
const putConfigLogParameter = makePutConfigLogParameter({ modifyConfigLogParameter });
const deleteConfigLogParameter = makeDeleteConfigLogParameter({ removeConfigLogParameter });

const eventLogController = Object.freeze({
    getConfigLog,
    getConfigParameters,
    postConfigLogParameter,
    putConfigLogParameter,
    deleteConfigLogParameter,
    notFound
})

module.exports = eventLogController;