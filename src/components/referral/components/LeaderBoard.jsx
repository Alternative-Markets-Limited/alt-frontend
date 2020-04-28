import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        dataIndex: 'index',
        title: 'Position',

    },
    {
        dataIndex: 'fullname',
        title: 'Full Name',
    },
    {
        dataIndex: 'points',
        title: 'Points',
    },

];

const usersPoints = [
    // {
    //     fullname: 'Ayokunle Adesanya',
    //     index: 1,
    //     points: '6',
    // },
    // {
    //     fullname: 'Ayokunle Adesanya',
    //     index: 1,
    //     points: '6',
    // },
    // {
    //     fullname: 'Ayokunle Adesanya',
    //     index: 1,
    //     points: '6',
    // },
];

export const LeaderBoard = () => (
    <div className="container px-2 my-8">
        <p className="mt-10 mb-4 font-medium text-base text-alt-blue">
            Meet our leaderboard
            <span className="font-bold"> top 10</span>
            . Return here at anytime to check your position.
        </p>
        <Table
            columns={columns}
            dataSource={usersPoints}
        />
    </div>
);
