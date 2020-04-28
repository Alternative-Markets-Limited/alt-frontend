import React from 'react';
import { Form, Input, Button } from 'antd';
import {
    UserAddOutlined, UserOutlined, LockOutlined, GlobalOutlined
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { formRules } from '../../common/formRules';
import { registerUser } from '../actions';

const {
    emailRules, firstnameRules, lastnameRules, passwordRules,
} = formRules;
const { Item } = Form;
const { Password } = Input;

const formFields = [
    {
        key: 1,
        name: 'firstname',
        placeholder: 'First Name',
        prefix: <UserAddOutlined />,
        rules: firstnameRules,
    },
    {
        key: 2,
        name: 'lastname',
        placeholder: 'Last Name',
        prefix: <UserOutlined />,
        rules: lastnameRules,
    },
    {
        key: 3,
        name: 'email',
        placeholder: 'Email',
        prefix: <GlobalOutlined />,
        rules: emailRules,
    },
];

export const SignUpForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const { token } = useParams();

    const onFinish = values => dispatch(registerUser({ history, token, values }));

    return (
        <Form form={form} name="signup" scrollToFirstError onFinish={onFinish}>
            {formFields.map(({
                key, name, placeholder, prefix, rules,
            }) => (
                <Item key={key} name={name} className="mb-3" rules={rules}>
                    <Input placeholder={placeholder} prefix={prefix} className="input-form" />
                </Item>
            ))}
            <Item name="password" className="mb-3" rules={passwordRules} hasFeedback>
                <Password placeholder="Password" prefix={<LockOutlined />} className="input-form" />
            </Item>
            <Item>
                <Button type="primary" htmlType="submit" className="btn-primary w-full">Sign Up</Button>
            </Item>
        </Form>
    );
};

