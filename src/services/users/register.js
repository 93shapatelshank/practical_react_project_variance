import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export default async function register(userData) {
	try {
		const response = await axios({
			method: 'post',
			url: `${getAPIUrl()}/api/register`,
			data: userData,
			headers: {
				'Content-Type': 'application/json'
			},
		});
		if (response.status === 200) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		await errorHandler(error);
		return false;
	}
}
