import axios from 'axios';

export default {

	saveInfo: function (userInfo) {
		return axios.post('/questionnaire', userInfo);
	},

	findRooms: function (info) {
		var url = "/api/rooms?";
		for (var key in info) {
			url += `${key}=${info[key]}&`;
		}
		return axios.get(url);
	},

	createUser: function (info) {
		console.log(info);
		return axios.post('api/signup', info);
	},

	loginUser: function (info) {
		console.log(info);
		return axios.post('/api/login', info);

	},

	userTest: function () {
		return axios.get('/login');
	},

	getCurrentUser: function () {
		return axios.get('/api/user');
	}


};