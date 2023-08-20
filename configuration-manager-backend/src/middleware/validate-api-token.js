const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});

module.exports = (req, res, next) => {
        try {
            const authToken = req.get('Authorization');

            if(!authToken){
                throw new Error('Authorization header doesn\'t exist.');
            }

            if(authToken === process.env.API_TOKEN){
                return next();
            }
            
            return res.status(401).send({ error: 'Your API key is invalid' });
        } catch (e) {
            return res.status(400).send({ error: e.message });
        } 
    };
