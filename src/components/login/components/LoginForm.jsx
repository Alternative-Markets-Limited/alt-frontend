import React from 'react';
import {
    Form, Input, Checkbox, Button
} from 'antd';
import { GlobalOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginUser } from '../actions';
import { TextLink } from '../../common/components';
import { formRules, passwordRequired } from '../../common/formRules';
import { Helmet } from 'react-helmet';

const { emailRules } = formRules;
const { Item } = Form;
const { Password } = Input;

export const LoginForm = () => {
    const history = useHistory();
    const location = useLocation();
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { from: { pathname } } = location.state || { from: { pathname: '/login' } };

    const onFinish = values => dispatch(loginUser({ history, pathname, values }));

    return (
        <Form name="login" form={form} scrollToFirstError onFinish={onFinish} initialValues={{ remember: true }}>
            <Helmet>
              <title>{ "Login Page" }</title>
            </Helmet>
            <Item name="email" className="my-3" rules={emailRules}>
                <Input placeholder="Email" prefix={<GlobalOutlined />} className="input-form" />
            </Item>
            <Item name="password" className="mb-3" rules={passwordRequired}>
                <Password placeholder="Password" prefix={<LockOutlined />} className="input-form" />
            </Item>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <Item name="remember" valuePropName="checked" className="mb-2 md:mb-0">
                    <Checkbox>Remember me</Checkbox>
                </Item>
                <TextLink name="Forgot Password?" route="/forgot-password" />
            </div>
            <Item>
                <Button type="primary" htmlType="submit" className="btn-primary w-full">Login</Button>
            </Item>
        </Form>
    );
};
