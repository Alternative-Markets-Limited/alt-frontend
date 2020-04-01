import React from 'react';
import {
    Form, Input, Button, Upload, DatePicker
} from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { formRules } from '../../common/formRules';
import { createProfile } from '../actions';

const {
    dobRules, phoneRules, bvnRules, addressRules,
} = formRules;
const { Item } = Form;

const formItems = [
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
    {
        feedback: false,
        key: 3,
        label: 'Bank Verification Number:',
        name: 'bvn',
        placeholder: '2244224422',
        required: true,
        rules: bvnRules,
        status: '',
    },
    {
        feedback: false,
        key: 4,
        label: 'Occupation:',
        name: 'occupation',
        placeholder: 'Investment Banker',
        required: false,
        rules: [],
        status: '',
    },
];

export const CreateProfileForm = withRouter(({ history }) => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const [form] = Form.useForm();

    const onFinish = ({
        phone, birthday, address, bvn, avatar, occupation,
    }) => {
        const values = new FormData();
        values.set('phone', phone);
        values.set('birthday', birthday.format('YYYY-MM-DD'));
        values.set('address', address);
        values.set('bvn', bvn);
        values.set('occupation', occupation);
        values.append('avatar', avatar[0].originFileObj);
        dispatch(createProfile({ history, token, values }));
    };

    const normFile = e => {
        if (Array.isArray(e)) return e;
        return e && e.fileList;
    };

    const dateFormat = 'DD-MM-YYYY';
    const disabledDate = current => current && current > moment().subtract(17, 'years');

    return (
        <Form name="createProfile" layout="vertical" form={form} onFinish={onFinish}>
            <Item name="avatar" className="my-3" valuePropName="fileList" label="Profile Picture:" getValueFromEvent={normFile}>
                <Upload name="logo" listType="picture" beforeUpload={() => false} accept="image/*">
                    <Button className="border-gray-200 border-2 rounded">
                        <UploadOutlined />
                        <span className="text-xs text-black">Click to upload</span>
                    </Button>
                </Upload>
            </Item>
            <Item name="birthday" className="mb-3" label="Date of Birth" rules={dobRules}>
                <DatePicker
                    className="border-gray-200 rounded py-2 border-2 w-full"
                    showToday={false}
                    format={dateFormat}
                    defaultPickerValue={moment(moment().subtract(17, 'years'))}
                    disabledDate={disabledDate}
                />
            </Item>
            {formItems.map(({
                key, name, label, placeholder, required, rules, status, feedback,
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
                >
                    <Input className="input-form" placeholder={placeholder} />
                </Item>
            ))}
            <Item>
                <Button type="primary" htmlType="submit" className="btn-primary w-full">Submit</Button>
            </Item>
        </Form>
    );
});
