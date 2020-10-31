import axios from 'axios';

const CitiesService = () => {
    return axios.get('http://localhost:4000/api/cities').then(res => res.data);
};

export default CitiesService;