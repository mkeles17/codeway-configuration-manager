module.exports = function makePostConfigLogParameter ({ createConfigLogParameter }) {
    return async function postConfigLogParameter (httpRequest) {
      try {
        const posted = await createConfigLogParameter({ 
          parameterInfo: httpRequest.body, 
        });
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 201,
          body: posted 
        };
      } catch (e) { 
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
