import React from 'react';
import {
    Form, Input, Button, message
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import medal from '../../../assets/images/medal.svg';
import { formRules } from '../../common/formRules';
import { detectChangedFields } from '../../common/helpers';
import { updateProfile } from '../actions';

const {
    phoneRules, addressRules, emailRules, occupationRules,
} = formRules;

const { Item } = Form;

export const EditProfileForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
        user: {
            firstname, lastname, email, phone, address, occupation, points,
        }, token,
    } = useSelector(state => state.auth);

    const formItem = [
        {
            disabled: true,
            key: 1,
            label: 'Fullname',
            name: 'fullname',
            placeholder: 'Fullname',
        },
        {
            disabled: true,
            key: 2,
            label: 'Email',
            name: 'email',
            placeholder: 'example@mail.com',
            required: true,
            rules: emailRules,
        },
        {
            disabled: false,
            key: 3,
            label: 'Phone',
            name: 'phone',
            placeholder: '08012345678',
            required: true,
            rules: phoneRules,
        },
        {
            disabled: false,
            key: 4,
            label: 'Address',
            name: 'address',
            placeholder: 'House Number, Street Name, Region',
            required: true,
            rules: addressRules,
        },
        {
            disabled: false,
            key: 5,
            label: 'Occupation',
            name: 'occupation',
            placeholder: 'Job Title',
            required: false,
            rules: occupationRules,
        },
    ];

    const initialValues = {
        address,
        email,
        fullname: `${firstname} ${lastname}`,
        occupation,
        phone,
    };

    const onCancel = () => {
        form.resetFields();
        message.info('Fields reset');
    };

    const onFinish = values => {
        const formValues = detectChangedFields(initialValues, values);
        if (Object.keys(formValues).length < 1) {
            message.info('No field was changed');
            return false;
        }
        return dispatch(updateProfile({ formValues, token }));
    };

    return (
        <div>
            <div className="flex flex-row items-center my-3">
                <img src={medal} alt="medal" className="h-8 mr-5" />
                <p className="text-sm text-gray-800">
                    You have&nbsp;
                    <span className="text-alt-blue">{` ${points} reward points`}</span>
                </p>
            </div>
            <Form name="editProfile" layout="vertical" form={form} initialValues={initialValues} onFinish={onFinish}>
                {formItem.map(({
                    key, name, label, placeholder, disabled, required, rules,
                }) => (
                    <Item key={key} name={name} className="mb-3" label={label} required={required} rules={rules}>
                        <Input className="input-form" placeholder={placeholder} disabled={disabled} />
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
        </div>

    );
};
