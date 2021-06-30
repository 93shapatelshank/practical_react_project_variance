import React, { useState } from 'react';
import Head from '../../components/Head';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = (props) => {
	const { authState, user, userList, getUsers } = props;
	const history = useHistory();
	const [loggedInUser, setLoggedInUser] = useState({});
	const [userCounts, setUserCounts] = useState(0);
	const [userDataList, setUserDataList] = useState([]);

	useEffect(() => {
		if (authState !== "loggedIn" && localStorage.getItem('authState') !== "loggedIn") {
			history.push("/signIn");
		} else if (user || localStorage.getItem('user')) {
			if (user) {
				setLoggedInUser(user);
			} else {
				setLoggedInUser(JSON.parse(localStorage.getItem('user')));
			}
			getUsers();
		}
	}, [authState]);

	useEffect(() => {
		setUserDataList(userList);
		setUserCounts(userList && userList.length);
	}, [userList]);

	return (
		<>
			<Head title="Dashboard" />
			<div className="px-4 pt-8  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-screen">
				<p className="uppercase text-white font-bold">Welcome to User Mangement System!</p>
				<hr className="border-white w-60 border-1 my-4" />
				<div className="shadow-md w-full h-20 bg-white mt-8 py-4 px-8 rounded-md flex items-center">
					<p className="text-black">Welcome! <b>{loggedInUser.firstName} {loggedInUser.lastName}</b> hope you are doing well.</p>
					<button className="bg-blue-800 w-40 shadow-md uppercase text-lg text-white py-2 px-4 ml-auto">Profile</button>
					<button className="bg-red-800 w-40 shadow-md uppercase text-lg text-white py-2 px-4 mx-8">Logout</button>
				</div>
				<div className="pt-8">
					<p className="uppercase text-white font-bold">Users ({userCounts})</p>
					<hr className="border-white w-60 border-1 my-4" />
					{userDataList?.length > 0 ? (
						userDataList.map((user, index) => {
							return (
								<div
									key={index}
									className="shadow-md w-full h-20 bg-white mt-2 py-4 px-8 rounded-md flex items-center"
								>
									<p className="font-medium text-black w-4/5 mx-8">{user.firstName}</p>
									<p className="font-medium text-black w-4/5 mx-8">{user.lastName}</p>
									<p className="font-medium text-black w-4/5 mx-8">{user.email}</p>
									<p className="bg-green-800 w-40 shadow-md uppercase text-lg text-white py-2 px-4 mx-8 cursor-pointer">View</p>
								</div>
							);
						})
					) : (
						<div className="shadow-md w-full h-24 bg-white mt-8 py-4 px-8 rounded-md text-center">
							<p className="text-black mt-6">No User found</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
