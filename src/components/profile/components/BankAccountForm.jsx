/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import {
    Form, Button, message, Input, Select
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBanks, updateProfile } from '../actions';
import { Spinner } from '../../common/components';
import { formRules } from '../../common/formRules';
import { detectChangedFields } from '../../common/helpers';

const { bankNameRules, accountNumberRules } = formRules;
const { Item } = Form;
const { Option } = Select;

export const BankAccountForm = () => {
    const { token, user: { bank_name, account_number } } = useSelector(state => state.auth);
    const { banks, loading } = useSelector(state => state.profile);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        form.resetFields();
        message.info('Fields reset');
    };

    useEffect(() => {
        dispatch(getBanks());
    }, [dispatch]);

    const initialValues = { account_number, bank_name };

    const onFinish = values => {
        const formValues = detectChangedFields(initialValues, values);
        if (Object.keys(formValues).length < 1) {
            message.info('No field was changed');
            return false;
        }
        return dispatch(updateProfile({ formValues, token }));
    };

    return loading ? <Spinner /> : (
        <Form name="editBankDetails" layout="vertical" form={form} initialValues={initialValues} onFinish={onFinish}>
            <Item name="bank_name" label="Select your Bank" required rules={bankNameRules}>
                <Select className="input-form py-0 w-full" placeholder="Select your Bank">
                    {banks && banks.map(({ id, name }) => (
                        <Option key={id} value={name}>{name}</Option>
                    ))}
                </Select>
            </Item>
            <Item name="account_number" label="Account Number" required rules={accountNumberRules}>
                <Input className="input-form w-full" placeholder="222334566668" />
            </Item>
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
