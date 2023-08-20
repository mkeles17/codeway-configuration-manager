module.exports = function makeListConfigLog ({ firestore }) {
    return async function listConfigLog () {
      const configLog = await firestore.getConfig();
      return configLog;
    }
  }