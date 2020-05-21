/* eslint-disable camelcase */
import React from 'react';
import {
    Form, Input, Button, DatePicker, message
} from 'antd';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { omit } from 'lodash';
import { formRules } from '../../common/formRules';
import { createProfile, verifyBvn } from '../actions';

const {
    dobRules, phoneRules, bvnRules, addressRules, firstnameRules, lastnameRules,
} = formRules;
const { Item } = Form;

export const CreateProfileForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { token, user: { lastname, firstname } } = useSelector(state => state.auth);
    const { bvn: { loading, error, verified } } = useSelector(state => state.profile);
    const [form] = Form.useForm();

    const onFinish = values => {
        const formValues = { ...values, birthday: moment(new Date(values.birthday)).format('YYYY-MM-DD') };

        let formattedFormValues;

        if (values.firstname === firstname || values.lastname === lastname) {
            formattedFormValues = omit(formValues, ['firstname', 'lastname']);
        } else {
            formattedFormValues = formValues;
        }

        if (error || loading || !verified) {
            message.info('Please verify your BVN');
            return;
        }
        dispatch(createProfile({ formattedFormValues, history, token }));
    };

    const dateFormat = 'DD-MM-YYYY';
    const disabledDate = current => current && current > moment().subtract(17, 'years');

    const handleOnBlur = () => {
        if (form.getFieldError('bvn').length || !form.getFieldValue('birthday')) {
            form.validateFields(['bvn', 'birthday']);
            return false;
        }
        const birthday = moment(new Date(form.getFieldValue('birthday'))).format('YYYY-MM-DD');
        const bvn = form.getFieldValue('bvn');

        return dispatch(verifyBvn({
            token,
            values: {
                bvn,
                callbackURL: `${process.env.REACT_APP_WEBSITE}/dashboard`,
                dob: birthday,
                firstname: form.getFieldValue('firstname'),
                surname: form.getFieldValue('lastname'),
            },
        }));
    };

    const checkStatus = (isLoading, isError, isSuccess) => {
        if (isLoading) {
            return 'validating';
        } if (isError) {
            return 'error';
        } if (isSuccess) {
            return 'success';
        }
        return null;
    };

    const formItems = [
        {
            feedback: true,
            help: error,
            key: 3,
            label: 'Bank Verification Number:',
            name: 'bvn',
            onBlur: handleOnBlur,
            placeholder: '2244224422',
            required: true,
            rules: bvnRules,
            status: checkStatus(loading, error, verified),
        },
        {
            feedback: false,
            key: 1,
            label: 'Phone Number:',
            name: 'phone',
            placeholder: '08012345678',
            required: true,
            rules: phoneRules,
            status: '',
        },
        {
            feedback: false,
            key: 2,
            label: 'Home Address:',
            name: 'address',
            placeholder: 'House Number, Street Name, Region',
            required: true,
            rules: addressRules,
            status: '',
        },
    ];

    return (
        <Form name="createProfile" layout="vertical" form={form} onFinish={onFinish} initialValues={{ firstname, lastname }}>
            <Item name="firstname" className="mb-3" label="Firstname" required rules={firstnameRules}>
                <Input className="input-form" placeholder="Firstname" disabled={verified} />
            </Item>
            <Item name="lastname" className="mb-3" label="Lastname" required rules={lastnameRules}>
                <Input className="input-form" placeholder="Lastname" disabled={verified} />
            </Item>
            <Item name="birthday" className="mb-3" label="Date of Birth" rules={dobRules}>
                <DatePicker
                    className="border-gray-200 rounded py-2 border-2 w-full"
                    showToday={false}
                    format={dateFormat}
                    defaultPickerValue={moment(moment().subtract(17, 'years'))}
                    disabledDate={disabledDate}
                    disabled={verified}
                />
            </Item>
            {formItems.map(({
                key, name, label, placeholder, required, rules, status, feedback, onBlur, help,
            }) => (
                <Item
                    key={key}
                    name={name}
                    className="mb-3"
                    label={label}
                    required={required}
                    rules={rules}
                    validateStatus={status}
                    hasFeedback={feedback}
                    help={help}
                >
                    <Input className="input-form" placeholder={placeholder} onBlur={onBlur} />
                </Item>
            ))}
            <Item>
                <Button type="primary" htmlType="submit" className="btn-primary w-full">Submit</Button>
            </Item>
        </Form>
    );
};
