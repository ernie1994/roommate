import axios from 'axios';

export default {

	saveInfo: function (userInfo) {
		return axios.post('/api', userInfo);
	},

	findRooms: function (info) {
		var url = "/api/rooms?";
		for (var key in info) {
			url += `${key}=${info[key]}&`;
		}
		return axios.get(url);
	}

};
