import axios from 'axios';

export default {
	saveInfo: function(userInfo) {
		console.log(userInfo);
		return axios.post('/', userInfo);
	}
	
}