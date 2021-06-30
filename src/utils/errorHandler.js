import toastMessage from '../utils/toastMessage';

export default async function errorHandler(error) {
	if (error?.response) {
		const status = error?.response?.status;
		if (status === 401) {
			toastMessage('error', `User is unauthorized to access portal!`);
		}
	}
}
