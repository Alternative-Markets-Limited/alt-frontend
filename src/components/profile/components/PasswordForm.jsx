import React from 'react';
import {
    Form, Input, Button, message
} from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../common/components';
import { formRules, passwordRequired } from '../../common/formRules';
import { updateProfile } from '../actions';

const { Item } = Form;
const { Password } = Input;
const { passwordRules } = formRules;

export const PasswordForm = () => {
    const { token } = useSelector(state => state.auth);
    const { loading } = useSelector(state => state.profile);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const passwordFields = [
        {
            hasFeedback: false, key: 1, name: 'old_password', placeholder: 'Old Password', rules: passwordRequired,
        },
        {
            hasFeedback: true, key: 2, name: 'password', placeholder: 'New Password', rules: passwordRules,
        },
    ];

    const onFinish = values => dispatch(updateProfile({ formValues: values, token }));

    const onCancel = () => {
        form.resetFields();
        message.info('Fields reset');
    };

    return loading ? <Spinner /> : (
        <Form name="editPassword" layout="vertical" form={form} onFinish={onFinish}>
            {passwordFields.map(({
                key, name, placeholder, rules, hasFeedback,
            }) => (
                <Item key={key} name={name} className="mb-3" rules={rules} hasFeedback={hasFeedback}>
                    <Password placeholder={placeholder} prefix={<LockOutlined />} className="input-form" />
                </Item>
            ))}
            <div className="flex flex-row mt-8">
                <Item>
                    <Button type="primary" htmlType="submit" className="btn-primary w-32 mr-4">Update</Button>
                </Item>
                <Item>
                    <Button type="primary" htmlType="button" onClick={onCancel} className="btn-secondary">Cancel</Button>
                </Item>
            </div>
        </Form>

    );
};
