const axios = require('axios').default;

const API = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

export default API;