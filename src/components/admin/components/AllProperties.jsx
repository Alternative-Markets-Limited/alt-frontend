import React from 'react';
import { useSelector } from 'react-redux';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { Table } from 'antd';
import { DashboardTitle } from './DashboardTitle';

export const AllProperties = () => {
    const { loading } = useSelector(state => state.adminDashboard);
    const { properties } = useSelector(state => state.home);

    const propertiesArray = properties.map(({
        id, category, investment_population, max_yield,
        min_fraction_price, min_yield, name,
    }) => ({
        category: category.name,
        investmentPopulation: investment_population,
        key: id,
        maxYield: max_yield,
        minFractionPrice: min_fraction_price,
        minYield: min_yield,
        name,
    }));

    const columns = [
        {
            dataIndex: 'name',
            key: 'name',
            title: 'Name',
        },
        {
            dataIndex: 'category',
            key: 'category',
            title: 'Category',
        },
        {
            dataIndex: 'investmentPopulation',
            key: 'investmentPopulation',
            title: 'Investent Population',
        },
        {
            dataIndex: 'minYield',
            key: 'minYield',
            title: 'Min Yield',
        },
        {
            dataIndex: 'maxYield',
            key: 'maxYield',
            title: 'Max Yield',
        },
        {
            dataIndex: 'minFractionPrice',
            key: 'minFractionPrice',
            title: 'Min Fraction Price',
        },
    ];

    return (
        <>
            <DashboardTitle title="All Properties" icon={faBuilding} />
            <Table
                columns={columns}
                dataSource={propertiesArray}
                loading={loading}
                pagination={{ pageSize: 10 }}
                scroll={{ x: '100vw' }}
                className="my-4"
            />
        </>
    );
};
