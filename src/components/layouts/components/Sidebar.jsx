import React, { useState } from 'react';
import { stack as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as MenuOpen } from '../../../assets/images/menu-open.svg';
import { ReactComponent as MenuClose } from '../../../assets/images/menu-close.svg';
import { AuthMenu } from '../../common/components';
import { logoutUser } from '../../login/actions';

export const Sidebar = ({ pageWrapId, outerContainerId }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {
        isAuthenticated, token,
    } = useSelector(state => state.auth);
    const [isOpen, setIsOpen] = useState({ menuOpen: false });
    const { menuOpen } = isOpen;

    const closeMenu = () => {
        setIsOpen({ menuOpen: false });
    };

    const handleStateChange = state => {
        setIsOpen({ menuOpen: state.isOpen });
    };

    const onButtonClick = () => {
        closeMenu();
        dispatch(logoutUser({ history, token }));
    };

    const defaultMenu = [
        {
            key: 1,
            name: 'Home',
            route: '/',
        },
        {
            key: 2,
            name: 'Properties',
            route: '/properties',
        },
        {
            key: 3,
            name: 'Login',
            route: '/login',
        },
        {
            key: 4,
            name: 'Register',
            route: '/register',
        },
        {
            key: 5,
            name: 'About Us',
            route: '/about-us',
        },
    ];

    const authMenu = [
        {
            key: 1,
            name: 'Home',
            route: '/',
        },
        {
            key: 2,
            name: 'Dashboard',
            route: '/dashboard',
        },
        {
            key: 3,
            name: 'My Assets',
            route: '/assets',
        },
        {
            key: 4,
            name: 'About Us',
            route: '/about-us',
        },
    ];

    return (
        <Menu
            isOpen={menuOpen}
            onStateChange={state => handleStateChange(state)}
            pageWrapId={pageWrapId}
            outerContainerId={outerContainerId}
            customBurgerIcon={isAuthenticated ? <AuthMenu /> : <MenuOpen />}
            customCrossIcon={<MenuClose />}
            right
        >
            {isAuthenticated ? (authMenu.map(({ key, name, route }) => (
                <NavLink key={key} className="hover:underline" activeClassName="underline" to={route} onClick={closeMenu}>
                    {name}
                </NavLink>
            ))) : (defaultMenu.map(({ key, name, route }) => (
                <NavLink key={key} className="hover:underline" activeClassName="underline" to={route} onClick={closeMenu}>
                    {name}
                </NavLink>
            )))}
            {isAuthenticated ? <button type="submit" className="hover:underline" onClick={onButtonClick}>Logout</button> : null }
        </Menu>
    );
};

Sidebar.propTypes = {
    outerContainerId: PropTypes.string,
    pageWrapId: PropTypes.string,
};

Sidebar.defaultProps = {
    outerContainerId: '',
    pageWrapId: '',
};
