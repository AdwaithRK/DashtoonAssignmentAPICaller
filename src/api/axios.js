import axios from 'axios';

const instance = axios.create({
    timeout: 2 * 60 * 10000
});

export default instance;