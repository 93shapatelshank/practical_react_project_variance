import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { regex } from '../../utils/regex';

const SignIn = (props) => {
	const { authState, user } = props;
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailMessage, setEmailMessage] = useState('');
	const [passwordMessage, setPasswordMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [openAlert, setOpenAlert] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const title = `Welcome Back,Let’s hustle!`;
	const subHeading = `Sign into your user portal`;

	useEffect(() => {
		if (user && user._id && authState === "loggedIn") {
			localStorage.setItem("authState", props.authState);
			localStorage.setItem("user", JSON.stringify(props.user));
			localStorage.setItem("token", props.user.accessToken);
			history.push("/dashboard");
		}
	}, [user])

	const handleFormSubmission = (event) => {
		event.preventDefault();
		let flag = true;
		setErrorMessage('');
		setPasswordMessage('');
		setEmailMessage('');
		setIsLoading(false);

		if (!email) {
			setEmailMessage('Please enter email');
			flag = false;
		} else if (!regex.email.test(email)) {
			setEmailMessage('Please enter valid email address');
			flag = false;
		}
		if (!password) {
			setPasswordMessage('Please enter password');
			flag = false;
		}
		if (flag) {
			signIn();
		}
	};

	const signIn = async () => {
		try {
			setIsLoading(true);
			setEmail(email.toLowerCase());
			const loginUser = await props.login(email, password);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setErrorMessage('An error has occurred.');
			console.error(err);
		}
	};

	const handleCreateAccount = () => {
		history.push('/signup');
	};

	const handleForgotPassword = () => {
		history.push('/forgotpassword');
	};

	return (
		<div className="flex min-h-screen">
			<div className="w-2/5 px-24 bg-customGray min-h-screen flex flex-col justify-center">
				<h1
					className="uppercase text-customText text-center text-2xl mb-8"
					dangerouslySetInnerHTML={{ __html: title }}
				></h1>
				<p className="text-center text-customText text-lg mb-12">{subHeading}</p>

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
						/>
						<p className="error-msg">{emailMessage}</p>
					</div>
					<div className="mb-4">
						<input
							className="appearance-none bg-transparent border-customGreen placeholder-black border-b py-3 w-full focus:outline-none"
							id="password"
							key="password"
							name="password"
							onChange={(event) => setPassword(event.target.value)}
							type="password"
							placeholder="Password"
						/>
						<p className="error-msg">{passwordMessage}</p>
					</div>
					<button
						className="bg-green-800 w-full shadow-md uppercase text-lg text-white py-2 px-4 focus:outline-none mt-8"
						type="submit"
					>
						Login
					</button>
					<div className="my-4 text-center">
						<a className="cursor-pointer" onClick={() => handleForgotPassword()}>
							Forgot Password?
						</a>
					</div>
					<div className="my-2 text-center">
						<a className="cursor-pointer" onClick={() => handleCreateAccount()}>
							Create Account
						</a>
					</div>
				</form>
			</div>
			<div className="w-3/5 p-24 min-h-screen flex flex-col justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></div>
		</div>
	);
};

export default SignIn;
