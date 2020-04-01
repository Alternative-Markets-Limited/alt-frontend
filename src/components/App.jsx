import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {
    HomePage,
    LoginPage,
    SignUpPage,
    VerificationPage,
    AgreementPage,
    CreateProfilePage,
    PropertiesPage,
    DashboardPage,
    EmailVerifiedSuccessPage,
    EmailVerifiedFailurePage,
    ForgotPasswordPage,
    SinglePropertyPage,
    Error404Page,
    OrderErrorPage,
    OrderSuccessPage,
    ResetPasswordPage,
    AssetsPage,
    ReturnsPage,
    TransactionsPage
} from './pages/components';
import { Header } from './layouts/components';
import { PrivateRoute, Spinner, AuthRoute } from './common/components';
import { getProperties } from './home/actions';
import { getAuthUser, authState } from './login/actions';

const App = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            dispatch(getAuthUser(token));
        } else {
            dispatch(authState(false));
        }
        dispatch(getProperties());
    }, [dispatch, token]);

    if (isAuthenticated === null) {
        return <Spinner />;
    }

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/properties" component={PropertiesPage} />
                <Route exact path="/reset-password/:token" component={ResetPasswordPage} />
                <AuthRoute exact path="/login" component={LoginPage} />
                <AuthRoute exact path="/register" component={SignUpPage} />
                <AuthRoute exact path="/verify" component={VerificationPage} />
                <AuthRoute exact path="/verification-successful" component={EmailVerifiedSuccessPage} />
                <AuthRoute exact path="/verification-error" component={EmailVerifiedFailurePage} />
                <AuthRoute exact path="/forgot-password" component={ForgotPasswordPage} />
                <PrivateRoute exact path="/agreement" component={AgreementPage} />
                <PrivateRoute exact path="/order-success" component={OrderSuccessPage} />
                <PrivateRoute exact path="/order-error" component={OrderErrorPage} />
                <PrivateRoute exact path="/create-profile" component={CreateProfilePage} />
                <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                <PrivateRoute exact path="/properties/:id" component={SinglePropertyPage} />
                <PrivateRoute exact path="/assets" component={AssetsPage} />
                <PrivateRoute exact path="/transactions" component={TransactionsPage} />
                <PrivateRoute exact path="/returns" component={ReturnsPage} />
                <Route component={Error404Page} />
            </Switch>
        </Router>
    );
};

export default App;
