import React from 'react';
import {
    Modal, InputNumber, Select
} from 'antd';
import PropTypes from 'prop-types';
import Rave from 'react-flutterwave-rave';
import { formatMoney, determineMaxFraction } from '../../common/helpers';

const { Option } = Select;

export const OrderModal = ({
    visible, handleOk, handleCancel, onChange, price, tokens, totalAmount, phone, email, callback, close,
    lastname, firstname, orders, id, yieldPeriod, onSelectChange, yieldValue,
}) => (
    <>
        <Modal
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
        >
            <p>How many fractions would you like to invest in?</p>
            <small className="italic text-gray-500">(You can only purchase 200 fractions per property)</small>
            <InputNumber
                min={1}
                max={determineMaxFraction(orders, { id, tokens }, 200)}
                onChange={onChange}
                type="number"
                className="input-form w-full my-3"
                placeholder="Number of fractions"
            />
            <Select
                className="input-form w-full mb-3"
                placeholder="Yield period"
                onChange={onSelectChange}
            >
                {Object.entries(yieldPeriod).map(([key, value]) => (
                    <Option key={key} value={key}>{`${key} Months (about ${value}% yield)`}</Option>
                ))}
            </Select>
            <div className="flex flex-row items-center justify-between w-full bg-gray-200 text-gray-900 p-4 rounded text-gray-900 font-medium">
                <div className="flex flex-row">
                    <p className="mr-4">₦</p>
                    <p>{formatMoney(price)}</p>
                </div>
                <p>NGN</p>
            </div>
            { !!totalAmount && yieldValue && (
                <Rave
                    pay_button_text="Proceed to Payment"
                    class="btn-primary w-full my-3 py-4 text-white"
                    payment_method="card"
                    customer_firstname={firstname}
                    customer_lastname={lastname}
                    customer_email={email}
                    customer_phone={phone}
                    amount={`${totalAmount}`}
                    ravePubKey={process.env.REACT_APP_FLUTTER_PUBK}
                    callback={callback}
                    onclose={close}
                />
            )}
        </Modal>
    </>
);

OrderModal.propTypes = {
    callback: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleOk: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    lastname: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelectChange: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    phone: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tokens: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
    yieldPeriod: PropTypes.shape().isRequired,
    yieldValue: PropTypes.number,
};

OrderModal.defaultProps = {
    yieldValue: null,
};
