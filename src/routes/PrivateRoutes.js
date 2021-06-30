import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
	/* Show the component only when the user is logged in
	 Otherwise, redirect the user to /signin page */
	return (
		<Route
			render={(props) =>
				<Fragment>
					<Component {...props} />
				</Fragment>
			}
		/>
	);
};

export default PrivateRoute;
