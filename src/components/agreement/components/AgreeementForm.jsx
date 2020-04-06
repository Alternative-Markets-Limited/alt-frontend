import React from 'react';
import { Button, Form, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import { formRules } from '../../common/formRules';

const { agreementRules } = formRules;
const { Item } = Form;

export const AgreeementForm = () => {
    const [form] = Form.useForm();
    const history = useHistory();

    const onFinish = () => history.push('create-profile');

    return (
        <Form name="agreement" form={form} onFinish={onFinish}>
            <Item name="agreement" valuePropName="checked" rules={agreementRules}>
                <Checkbox>
                    <span className="text-xs">I am 18 years or older. I have read and accepted the terms and conditions and the PDS.</span>
                </Checkbox>
            </Item>
            <Item>
                <Button type="primary" htmlType="submit" className="btn-primary mb-4 w-full md:w-2/3 lg:w-1/3">Next</Button>
            </Item>
        </Form>
    );
};
