const axios = require('axios');

const axiosInstance = axios.create({
//   baseURL: 'https://api.divineword.xyz'
    baseURL: 'http://3.82.94.95/'
    /* other custom settings */
});

module.exports = axiosInstance;