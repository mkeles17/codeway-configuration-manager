const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});

module.exports = function makeFirebase ({ db }) {
    return Object.freeze({
      insert,
      findByParameterKey,
      getConfig,
      getParameterDetails,
      update,
      remove
    })

    async function insert ({ data }) {
      try {
        const response = await db.collection(process.env.FIREBASE_COLLECTION_ID).doc(data.parameter_key).set(data);
        return { 
            success: true,
            message: `Configuration Parameter was successfully posted.`
        };
      } catch (error) {
        return { 
            success: false,
            message: error.message 
        };
      }
    }

    async function findByParameterKey({ parameter_key }) {
      const response = await db.collection(process.env.FIREBASE_COLLECTION_ID).doc(parameter_key).get();
      return response.data();
    }

    async function getConfig () {
      try {
        const response = await db.collection(process.env.FIREBASE_COLLECTION_ID).get();
        let responseArr = {};
        response.forEach(doc => {
          responseArr[doc.data().parameter_key] = doc.data().value;
        });
        return responseArr;
      } catch (error) {
        return { 
            success: false,
            message: error.message 
        };
      }
    }

    async function getParameterDetails () {
      try {
        const response = await db.collection(process.env.FIREBASE_COLLECTION_ID).get();
        let responseArr = [];
        response.forEach(doc => {
          responseArr.push(doc.data())
        });
        return responseArr;
      } catch (error) {
        return { 
            success: false,
            message: error.message 
        };
      }
    }

    async function update ({ data }) {
      try {
        const { parameter_key, ...modifications } = data
        const response = await db.collection(process.env.FIREBASE_COLLECTION_ID).doc(parameter_key)
        .update(modifications)
        return { 
            success: true,
            message: 'Configuration Parameter was successfully updated.' 
        };
      } catch (error) {
        return { 
            success: false,
            message: error.message 
        };
      }
    }

    async function remove ({ parameter_key }) {
      try {
        const response = await db.collection(process.env.FIREBASE_COLLECTION_ID).doc(parameter_key)
        .delete();
        return { 
            success: true,
            message: 'Configuration Parameter was successfully deleted.' 
        };
      } catch (error) {
        return { 
            success: false,
            message: error.message 
        };
      }
    }

}
