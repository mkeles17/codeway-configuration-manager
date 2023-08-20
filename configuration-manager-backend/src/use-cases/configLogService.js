const makeListConfigLog = require("./list-config-log.js");
const makeListConfigParameters = require("./list-config-parameters.js");
const makeCreateConfigLogParameter = require("./create-parameter.js");
const makeModifyConfigLogParameter = require("./modify-parameter.js");
const makeRemoveConfigLogParameter = require("./remove-parameter.js");
const { firestore } = require("../data-access/index.js");

const listConfigLog = makeListConfigLog({ firestore });
const listConfigParameters = makeListConfigParameters({ firestore });
const createConfigLogParameter = makeCreateConfigLogParameter({ firestore });
const modifyConfigLogParameter = makeModifyConfigLogParameter({ firestore });
const removeConfigLogParameter = makeRemoveConfigLogParameter({ firestore });

const configLogService = Object.freeze({
  listConfigLog, 
  listConfigParameters,
  createConfigLogParameter,
  modifyConfigLogParameter,
  removeConfigLogParameter
});

module.exports = {  
  listConfigLog, 
  listConfigParameters, 
  createConfigLogParameter, 
  modifyConfigLogParameter, 
  removeConfigLogParameter 
};