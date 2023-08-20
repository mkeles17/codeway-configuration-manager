import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export async function getConfigParams(token) {
    return api
        .get('/config-params', {
            headers: { Authorization: token }
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
}

export async function deleteParameter(token, parameterKey) {
    return api
        .delete(`/config-params/${parameterKey}`, {
            headers: { Authorization: token }
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
}

export async function modifyParameter(token, parameter) {
    return api
        .put('/config-params', parameter, {
            headers: { Authorization: token }
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
}

export async function postParameter(token, parameter) {
    return api
        .post('/config-params', parameter, {
            headers: { Authorization: token }
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
}
