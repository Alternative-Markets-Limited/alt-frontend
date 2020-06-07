import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import {
    AppstoreAddOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import PropTypes from 'prop-types';

const { SubMenu, Item } = Menu;

export const SideMenu = ({ handleClick }) => {
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const { innerWidth } = window;
        if (innerWidth > 768) {
            setCollapsed(false);
        }
        return () => setCollapsed(false);
    }, []);

    return (
        <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            inlineCollapsed={collapsed}
            onClick={handleClick}
        >
            <Item key="1" icon={<PieChartOutlined />}>
                    Analytics
            </Item>
            <Item key="2" icon={<DesktopOutlined />}>
                   All Orders
            </Item>
            <Item key="3" icon={<ContainerOutlined />}>
                   Manage Returns
            </Item>
            <SubMenu key="sub1" icon={<AppstoreAddOutlined />} title="Properties">
                <Item key="5">All Properties</Item>
                <Item key="6">Add New Property</Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserAddOutlined />} title="Users">
                <Item key="9">All Users</Item>
            </SubMenu>
        </Menu>
    );
};

SideMenu.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

