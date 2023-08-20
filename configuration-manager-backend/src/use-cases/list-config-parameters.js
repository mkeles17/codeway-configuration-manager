module.exports = function makeListConfigParameters ({ firestore }) {
    return async function listConfigParameters () {
      const configParameters = await firestore.getParameterDetails();
      return configParameters;
    }
  }