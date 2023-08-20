const { admin } = require('../data-access/index.js');

module.exports = async (req, res, next) => {
    try {
        const authToken = req.get('Authorization');
        if(!authToken){
            return res.status(400).send({ error: 'Authorization header doesn\'t exist.' });
        }
        await admin.auth().verifyIdToken(authToken);
        return next();

    } catch (e) {
        return res.status(401).send({ error: 'You are not authorized.' });
    } 
};