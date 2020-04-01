import React from 'react';
import {
    Form, Input, Button
} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { formRules } from '../../common/formRules';
import { forgotPassword } from '../actions';

const { emailRules } = formRules;
const { Item } = Form;

export const ForgotPasswordForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = value => dispatch(forgotPassword({ form, value }));

    return (
        <Form name="resetPassword" form={form} scrollToFirstError onFinish={onFinish}>
            <Item name="email" className="my-3" rules={emailRules}>
                <Input placeholder="Email" prefix={<GlobalOutlined />} className="input-form" />
            </Item>
            <Item>
                <Button type="primary" htmlType="submit" className="btn-primary w-full">Reset Password</Button>
            </Item>
        </Form>
    );
};
