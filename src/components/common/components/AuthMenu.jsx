import React from 'react';
import { Avatar, Badge, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

export const AuthMenu = () => {
    const { user } = useSelector(state => state.auth);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return !user ? <Spin indicator={antIcon} /> : (
        <Badge dot>
            <Avatar src={user.avatar} alt="avatar" />
        </Badge>
    );
};
