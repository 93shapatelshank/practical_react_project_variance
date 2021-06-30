import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export default async function login(userData) {
	try {
		const response = await axios({
			method: 'post',
			url: `${getAPIUrl()}/api/login`,
			data: userData,
			headers: {
				'Content-Type': 'application/json'
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
