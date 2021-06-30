import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { regex } from '../../utils/regex';

const ForgotPassword = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [emailMessage, setEmailMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [openAlert, setOpenAlert] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleFormSubmission = (event) => {
		event.preventDefault();
		let flag = true;
		setEmailMessage('');
		setErrorMessage('');
		setIsLoading(false);

		if (!email) {
			setEmailMessage('Please enter email');
			flag = false;
		} else if (!regex.email.test(email)) {
			setEmailMessage('Please enter valid email');
			flag = false;
		}
		if (flag) {
			sendResetPasswordCode();
		}
	};

	const sendResetPasswordCode = async () => {
		try {
			setIsLoading(true);
			setEmail(email.toLowerCase());
			localStorage.setItem('userEmail', email);
			setIsLoading(false);
			setOpenAlert(true);
		} catch (err) {
			setIsLoading(false);
			setErrorMessage('An error has occurred.');
			console.error(err);
		}
	};

	const handleBackToLogin = () => {
		history.push("/signin");
	}

	return (
		<div className="min-h-screen">
			<div className="flex">
				<div className="w-2/5 px-24 bg-customGray min-h-screen flex flex-col justify-center">
					<h1 className="uppercase text-customText text-center text-2xl mb-8">Forgot Password</h1>
					<p className="text-center text-customText text-lg mb-12">
						{' '}
						Provide your email address to get reset password code{' '}
					</p>
					<form onSubmit={handleFormSubmission}>
						{errorMessage && (
							<div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
								<p>{errorMessage}</p>
							</div>
						)}
						<div className="mb-4">
							<input
								className="appearance-none border-customGreen placeholder-black bg-transparent border-b py-3 w-full focus:outline-none"
								id="email"
								key="email"
								name="email"
								onChange={(event) => setEmail(event.target.value.toLowerCase())}
								type="text"
								placeholder="Email"
								autoComplete="off"
							/>
							<p className="error-msg">{emailMessage}</p>
						</div>
						<button
							className="bg-green-800 w-full shadow-md uppercase text-lg text-white py-2 px-4 focus:outline-none mt-8"
							type="submit"
						>
							Submit
						</button>
						<div className="my-4 text-center">
							<a className="cursor-pointer" onClick={() => handleBackToLogin()}>
								Back to Login
							</a>
						</div>
					</form>
				</div>
				<div className="w-3/5 p-24 min-h-screen flex flex-col justify-center bg-gradient-to-r from-purple-300 via-green-500 to-blue-600">
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
