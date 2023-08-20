const makeConfigLogParameter = require("../entities/configLogParameter.js");

module.exports = function makeCreateConfigLogParameter ({ firestore }) {
    return async function createConfigLogParameter ({ parameterInfo, authToken }) {
      const parameter = makeConfigLogParameter(parameterInfo);

      const parameter_key = parameter.getParameterKey()
      const parameterExists = await firestore.findByParameterKey({ parameter_key });
      if(parameterExists){
        return { 
          success: false,
          message: `Parameter named "${parameter_key}" already exists.`
        }
      }

      const creation_date = Date.now();
      const data = {
        "parameter_key": parameter.getParameterKey(),
        "value": parameter.getValue(),
        "description": parameter.getDescription(),
        "creation_date": creation_date
      };
  
      return firestore.insert({ data, authToken });
    }
  }
