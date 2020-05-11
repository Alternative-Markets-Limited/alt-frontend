import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
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
    TransactionsPage,
    AboutUsPage,
    SinglePostPage,
    PostsPage,
    ReferralPage
} from './pages/components';
import { Header } from './layouts/components';
import { PrivateRoute, Spinner, AuthRoute } from './common/components';
import { getProperties } from './home/actions';
import { getAuthUser, authState } from './login/actions';

const App = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);
    const token = localStorage.getItem('token');
    const location = useLocation();

    const transitions = useTransition(location, loc => loc.key, {
        enter: { opacity: 1, transform: 'translate(0%,0)' },
        from: { opacity: 0, transform: 'translate(100%,0)' },
        leave: { opacity: 0, transform: 'translate(-50%,0)' },
    });

    useEffect(() => {
        if (token) {
            dispatch(getAuthUser(token));
        } else {
            dispatch(authState(false));
        }
    }, [token, dispatch]);

    useEffect(() => {
        dispatch(getProperties());
    }, [dispatch]);

    if (isAuthenticated === null) {
        return <Spinner />;
    }

    return (
        <div className="relative">
            <Header />
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props} className="absolute w-full">
                    <Switch location={item}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/properties" component={PropertiesPage} />
                        <Route exact path="/reset-password/:token" component={ResetPasswordPage} />
                        <Route exact path="/about-us" component={AboutUsPage} />
                        <Route exact path="/blog" component={PostsPage} />
                        <Route exact path="/blog/:slug" component={SinglePostPage} />
                        <Route exact path="/404" component={Error404Page} />
                        <AuthRoute exact path="/login" component={LoginPage} />
                        <AuthRoute exact path="/register" component={SignUpPage} />
                        <AuthRoute exact path="/register/ref/:token" component={SignUpPage} />
                        <AuthRoute exact path="/verify" component={VerificationPage} />
                        <AuthRoute exact path="/verification-successful" component={EmailVerifiedSuccessPage} />
                        <AuthRoute exact path="/verification-error" component={EmailVerifiedFailurePage} />
                        <AuthRoute exact path="/forgot-password" component={ForgotPasswordPage} />
                        <PrivateRoute exact path="/refer" component={ReferralPage} />
                        <PrivateRoute exact path="/agreement" component={AgreementPage} />
                        <PrivateRoute exact path="/order-success" component={OrderSuccessPage} />
                        <PrivateRoute exact path="/order-error" component={OrderErrorPage} />
                        <PrivateRoute exact path="/create-profile" component={CreateProfilePage} />
                        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                        <PrivateRoute exact path="/properties/:slug" component={SinglePropertyPage} />
                        <PrivateRoute exact path="/assets" component={AssetsPage} />
                        <PrivateRoute exact path="/transactions" component={TransactionsPage} />
                        <PrivateRoute exact path="/returns" component={ReturnsPage} />
                        <Route component={Error404Page} />
                    </Switch>
                </animated.div>
            ))}

        </div>
    );
};

export default App;
