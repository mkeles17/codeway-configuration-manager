module.exports = function makeGetConfigParameters ({ listConfigParameters }) {
    return async function getConfigParameters (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      };
      try {
        const configParameters = await listConfigParameters();
        return {
          headers,
          statusCode: 200,
          body: configParameters
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