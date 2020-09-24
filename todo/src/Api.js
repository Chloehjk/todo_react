import React from 'react';
import Axios from 'axios';

const API = Axios.create({
    baseURL:"http://127.0.0.1:8000/api/"
})
export default API;