const makeConfigLogParameter = require("../entities/configLogParameter.js");

module.exports = function makeModifyConfigLogParameter ({ firestore }) {
    return async function modifyConfigLogParameter ({ parameterInfo, authToken }) {
      const parameter = makeConfigLogParameter(parameterInfo);
      const data = {
        "parameter_key": parameter.getParameterKey(),
        "value": parameter.getValue(),
        "description": parameter.getDescription(),
      };
      return firestore.update({ data, authToken });
    }
  }