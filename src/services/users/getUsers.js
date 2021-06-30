import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export default async function getUsers(userData) {
	try {
		const token = localStorage.getItem("token");
		const response = await axios({
			method: 'get',
			url: `${getAPIUrl()}/api/users`,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `${token}`,
			},
		});
		if (response.status === 200) {
			return response.data;
		} else {
			return false;
		}
	} catch (error) {
		await errorHandler(error);
		return false;
	}
}
