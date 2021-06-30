export default function getAPIUrl() {
	if (process.env.REACT_APP_ENV === 'development') {
		return process.env.REACT_APP_LOCAL_API_URL;
	} else if (process.env.REACT_APP_ENV === 'production') {
		return process.env.REACT_APP_API_URL;
	}
}
