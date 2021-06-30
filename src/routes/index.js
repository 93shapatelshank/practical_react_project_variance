import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardContainer from '../pages/Dashboard/DashboardContainer';
import SignInContainer from '../pages/SignInPage/SignInContainer';
import SignUpContainer from '../pages/SignUpPage/SignUpContainer';

/* Routes */
import PrivateRoute from './PrivateRoutes';

const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));

const Routes = () => {
	return (
		<Suspense fallback={''}>
			<Router>
				<Switch>
					<Route exact path="/signin" component={SignInContainer} />
					<Route exact path="/signup" component={SignUpContainer} />
					<Route exact path="/forgotpassword" component={ForgotPasswordPage} />
					<PrivateRoute exact path="/" component={DashboardContainer} />
					<PrivateRoute exact path="/dashboard" component={DashboardContainer} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;
