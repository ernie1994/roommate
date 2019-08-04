import axios from 'axios';

export default {

	saveInfo: function (userInfo) {
		return axios.post('/api', userInfo);
	},

	findRooms: function (info) {
		return axios.get("/api/search", { params: info });
	}

};