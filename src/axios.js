import axios from "axios";

const Axios = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://leadesh-whatsapp.onrender.com',
    withCredentials: true,
})

export default Axios;

