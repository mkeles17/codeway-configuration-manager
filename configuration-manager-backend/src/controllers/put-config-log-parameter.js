module.exports = function makePutConfigLogParameter ({  modifyConfigLogParameter }) {
    return async function putConfigLogParameter (httpRequest) {
      try {
        const patched = await modifyConfigLogParameter({ 
          parameterInfo: httpRequest.body, 
        });
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 200,
          body: patched 
        };
      } catch (e) { 
        console.log(e);
        if (e.name === 'RangeError') {
          return {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 404,
            body: {
              message: e.message
            }
          };
        }
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            message: e.message
          }
        };
      }
    };
};