import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1352b-default-rtdb.firebaseio.com/'
});

export default instance;