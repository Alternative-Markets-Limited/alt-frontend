import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from './MainLayout';
import { AnalyticsDashboard } from './AnalyticsDashboard';
import { OrdersDashboard } from './OrdersDashboard';
import { AllUsersDashboard } from './AllUsersDashboard';
import { getAllOrders, getAllInvoice, getAllUsers } from '../actions';

export const Dashboard = () => {
    const { token } = useSelector(state => state.auth);
    const [menuKey, setMenuKey] = useState('1');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllInvoice(token));
        dispatch(getAllOrders(token));
        dispatch(getAllUsers(token));
    }, [token, dispatch]);

    const KEY = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const handleClick = ({ key }) => setMenuKey(key);

    const renderContent = () => {
        switch (menuKey) {
        case KEY[0]:
            return <AnalyticsDashboard />;
        case KEY[1]:
            return <OrdersDashboard />;
        case KEY[8]:
            return <AllUsersDashboard />;
        default:
            return <AnalyticsDashboard />;
        }
    };

    return <MainLayout handleClick={handleClick}>{renderContent()}</MainLayout>;
};
