// /* eslint-disable camelcase */
// /* eslint-disable no-restricted-syntax */
// import React, { useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { DatePicker } from 'antd';
// import PropTypes from 'prop-types';
// import moment from 'moment';
// // import { find } from 'lodash';

// const { RangePicker } = DatePicker;

// export const SalesReport = ({ orders }) => {
//     const [orderData, setOrderData] = useState(null);

//     // const onChange = values => {
//     //     if (!values) return;
//     //     const [minDate, maxDate] = values;
//     //     const ordersRange = [];
//     //     const minMonth = new Date(minDate).getMonth();
//     //     const maxMonth = new Date(maxDate).getMonth();
//     };

//     // setOrderData(ordersRange);

//     // console.log(orderData);

//     const disabledDate = current => current && current > moment().endOf('day');

//     const data = {
//         datasets: [
//             {
//                 data: [
//                     {
//                         x: new Date('01/01/2020'),
//                         y: 5,
//                     },
//                     {
//                         x: new Date('02/01/2020'),
//                         y: 2,
//                     },
//                     {
//                         x: new Date('12/01/2020'),
//                         y: 0,
//                     },
//                 ],
//                 label: '# of orders',
//             },
//         ],
//     };

//     const options = {
//         scales: {
//             xAxes: [{
//                 time: {
//                     unit: 'month',
//                 },
//                 type: 'time',
//             }],
//         },
//     };
//     return (
//         <>
//             <RangePicker className="my-2" picker="month" onChange={onChange} disabledDate={disabledDate} />
//             <Bar data={data} options={options} />
//         </>
//     );
// };

// SalesReport.propTypes = {
//     orders: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
// };
