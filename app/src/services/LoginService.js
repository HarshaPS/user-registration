import axios from 'axios';

const LoginService = data => (
	axios.post('http://localhost:4000/api/login', data)
		.then(res => res.data)
)

export default LoginService;
