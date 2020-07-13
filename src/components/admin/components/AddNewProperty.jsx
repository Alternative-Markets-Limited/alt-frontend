import React from 'react';
import {
    Form, Input, Button, Space, InputNumber
} from 'antd';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { DashboardTitle } from './DashboardTitle';

export const AddNewProperty = () => {
    const { Item } = Form;
    const { TextArea } = Input;

    return (
        <>
            <DashboardTitle title="Add New Property" icon={faBuilding} />
            <Form name="" className="w-3/4">
                <Item name="name" className="my-3">
                    <Input placeholder="Property Name" className="input-form" />
                </Item>
                <Item name="category" className="my-3">
                    <Input placeholder="Category" className="input-form" />
                </Item>
                <Item name="invest_pop" className="my-3">
                    <InputNumber placeholder="Investment Population" className="input-form w-4/12" />
                </Item>
                <Space style={{ display: 'flex' }} align="start">
                    <Item name="min_yield" className="my-3">
                        <InputNumber placeholder="Minimum Yield" className="input-form w-full" />
                    </Item>
                    <Item name="max_yield" className="my-3">
                        <InputNumber placeholder="Maximm Yield" className="input-form w-full" />
                    </Item>
                </Space>
                <Item name="min_frac_price" className="my-3">
                    <InputNumber placeholder="Minimum Fraction Price" className="input-form w-5/12" />
                </Item>
                <Item name="net_rent_yield" className="my-3">
                    <InputNumber placeholder="Net Rental Yield" className="input-form w-4/12" />
                </Item>
                <Item name="about" className="my-3">
                    <TextArea rows={6} placeholder="About Property" className="input-form" />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit" className="btn-primary w-full">Add Property</Button>
                </Item>
            </Form>
        </>
    );
};
