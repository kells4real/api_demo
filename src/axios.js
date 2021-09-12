const axios = require('axios');

const axiosInstance = axios.create({
//   baseURL: 'https://api.divineword.xyz'
    baseURL: 'http://ec2-52-13-104-158.us-west-2.compute.amazonaws.com/'
    /* other custom settings */
});

module.exports = axiosInstance;