import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, GlobalOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { formRules } from '../../common/formRules';
import { resetPassword } from '../actions';

const {
    emailRules, passwordRules,
} = formRules;
const { Item } = Form;
const { Password } = Input;

export const ResetPasswordForm = () => {
    const { token } = useParams();
    const history = useHistory();
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish = values => dispatch(resetPassword({ history, token, values }));

    return (
        <Form form={form} name="signup" scrollToFirstError onFinish={onFinish}>

            <Item name="email" className="mb-3" rules={emailRules}>
                <Input placeholder="Email" prefix={<GlobalOutlined />} className="input-form" />
            </Item>

            <Item name="password" className="mb-3" rules={passwordRules} hasFeedback>
                <Password placeholder="Password" prefix={<LockOutlined />} className="input-form" />
            </Item>
            <Item>
                <Button type="primary" htmlType="submit" className="btn-primary w-full">Reset Password</Button>
            </Item>
        </Form>
    );
};

