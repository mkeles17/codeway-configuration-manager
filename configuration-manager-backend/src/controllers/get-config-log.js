module.exports = function makeGetConfigLog ({ listConfigLog }) {
    return async function getConfigLog (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      };
      try {
        const configLog = await listConfigLog();
        return {
          headers,
          statusCode: 200,
          body: configLog
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            message: e.message
          }
        };
      }
    };
};