import React, { useState } from 'react';
import { regex } from '../../utils/regex';
import { useHistory } from 'react-router-dom';
import SuccessAlert from '../../components/alerts/SuccessAlert';

const SignUp = (props) => {
	const history = useHistory();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [firstNameMessage, setFirstNameMessage] = useState('');
	const [lastNameMessage, setLastNameMessage] = useState('');
	const [emailMessage, setEmailMessage] = useState('');
	const [passwordMessage, setPasswordMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);

	const handleFormSubmission = (event) => {
		event.preventDefault();
		let flag = true;
		setErrorMessage('');
		setFirstNameMessage('');
		setLastNameMessage('');
		setEmailMessage('');
		setPasswordMessage('');
		setIsLoading(false);

		if (!firstName) {
			setFirstNameMessage('Please enter first name');
			flag = false;
		}
		if (!lastName) {
			setLastNameMessage('Please enter last name');
			flag = false;
		}
		if (!email) {
			setEmailMessage('Please enter email');
			flag = false;
		} else if (!regex.email.test(email)) {
			setEmailMessage('Please enter valid email address');
			flag = false;
		}
		if (!regex.password.test(password) || !regex.password.test(confirmPassword)) {
			setPasswordMessage('Both password should contain minimum 8 character, at least one letter and one number');
			flag = false;
		}
		if (password !== confirmPassword) {
			setPasswordMessage('Password and Confirm Password must be equal');
			flag = false;
		}
		if (flag) {
			signUp();
		}
	};

	const signUp = async () => {
		try {
			setIsLoading(true);
			setEmail(email.toLowerCase());
			const userData = { email, password, firstName, lastName };
			const registerUser = await props.register(userData);
			setIsLoading(false);
			setOpenAlert(true);
		} catch (err) {
			setIsLoading(false);
			setErrorMessage('An error has occurred.');
			console.error(err);
		}
	};

	const handleBackToLogin = () => {
		history.push('/signin');
	};

	return (
		<div className="min-h-screen">
			<div className="flex">
				<div className="w-2/5 px-24 bg-customGray min-h-screen flex flex-col justify-center">
					<h1 className="uppercase text-customText text-center text-2xl mb-8">
						Join the User management community
					</h1>
					<p className="text-center text-customText text-lg mb-12">
						Create a free account and check users
					</p>

					<form onSubmit={handleFormSubmission}>
						<input type={'hidden'} value={'something'} />
						{errorMessage && (
							<div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
								<p>{errorMessage}</p>
							</div>
						)}
						<div className="flex -mx-2 items-center mb-4">
							<div className="px-2 w-1/2">
								<input
									className="appearance-none border-customGreen placeholder-black bg-transparent border-b py-3 w-full focus:outline-none"
									id="firstName"
									key="firstName"
									name="firstName"
									onChange={(event) => setFirstName(event.target.value)}
									type="text"
									placeholder="First Name"
									autoComplete="firstName"
								/>
								<p className="error-msg">{firstNameMessage}</p>
							</div>
							<div className="px-2 w-1/2">
								<input
									className="appearance-none border-customGreen placeholder-black bg-transparent border-b py-3 w-full focus:outline-none"
									id="lastName"
									key="lastName"
									name="lastName"
									onChange={(event) => setLastName(event.target.value)}
									type="text"
									placeholder="Last Name"
									autoComplete="lastName"
								/>
								<p className="error-msg">{lastNameMessage}</p>
							</div>
						</div>
						<div className="mb-4">
							<input
								className="appearance-none border-customGreen placeholder-black bg-transparent border-b py-3 w-full focus:outline-none"
								id="email"
								key="email"
								name="email"
								onChange={(event) => setEmail(event.target.value.toLowerCase())}
								type="text"
								placeholder="Email"
								autoComplete="email"
							/>
							<p className="error-msg">{emailMessage}</p>
						</div>
						<div className="mb-4">
							<input
								className="appearance-none border-customGreen placeholder-black bg-transparent border-b py-3 w-full focus:outline-none"
								id="password"
								key="password"
								name="password"
								onChange={(event) => setPassword(event.target.value)}
								type="password"
								placeholder="Password"
								autoComplete="password"
							/>
						</div>
						<div className="mb-4">
							<input
								className="appearance-none border-customGreen placeholder-black bg-transparent border-b py-3 w-full focus:outline-none"
								id="confirmPassword"
								key="confirmPassword"
								name="confirmPassword"
								onChange={(event) => setConfirmPassword(event.target.value)}
								type="password"
								placeholder="Confirm Password"
								autoComplete="confirmPassword"
							/>
						</div>
						<p className="error-msg mb-4">{passwordMessage}</p>
						<button
							className="bg-green-800 w-full shadow-md uppercase text-lg text-white py-2 px-4 focus:outline-none mt-8"
							type="submit"
						>
							Create
						</button>
						<div className="my-4 text-center">
							<a className="cursor-pointer" onClick={() => handleBackToLogin()}>
								Back to Login
							</a>
						</div>
					</form>
					<SuccessAlert openAlert={openAlert} type={"newRegister"} redirectPath="/signin" />
				</div>
				<div className="w-3/5 p-24 min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-300 via-purple-500 to-green-600"></div>
			</div>
		</div>
	);
};

export default SignUp;
