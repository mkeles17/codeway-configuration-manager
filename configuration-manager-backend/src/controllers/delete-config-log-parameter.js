module.exports = function makeDeleteConfigLogParameter ({ removeConfigLogParameter }) {
    return async function deleteConfigLogParameter (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const deleted = await removeConfigLogParameter({ 
            parameter_key: httpRequest.params.parameterKey
          });
        return {
          headers,
          statusCode: deleted.deletedCount === 0 ? 404 : 200,
          body: deleted
        }
      } catch (e) {
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            message: e.message
          }
        }
      }
    }
  }