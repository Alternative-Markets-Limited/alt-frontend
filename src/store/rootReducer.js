import { combineReducers } from 'redux';
import homeReducer from '../components/home/reducer';
import signUpReducer from '../components/signUp/reducer';
import verificationReducer from '../components/verification/reducer';
import authReducer from '../components/login/reducer';
import profileReducer from '../components/profile/reducer';
import dashboardReducer from '../components/dashboard/reducer';
import propertyReducer from '../components/properties/reducer';
import blogReducer from '../components/blog/reducer';

export default combineReducers({
    auth: authReducer,
    blog: blogReducer,
    dashboard: dashboardReducer,
    home: homeReducer,
    profile: profileReducer,
    property: propertyReducer,
    signUp: signUpReducer,
    verification: verificationReducer,
});
