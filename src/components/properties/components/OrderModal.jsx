import React from 'react';
import { Modal, InputNumber } from 'antd';
import PropTypes from 'prop-types';
import Rave from 'react-flutterwave-rave';
import { formatMoney, determineMaxFraction } from '../../common/helpers';

export const OrderModal = ({
    visible, handleOk, handleCancel, onChange, price, tokens, totalAmount, phone, email, callback, close,
    lastname, firstname, orders, id,
}) => (
    <>
        <Modal
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
        >
            <p>How many fractions would you like to invest in?</p>
            <InputNumber
                min={1}
                max={determineMaxFraction(orders, { id, tokens }, 200)}
                defaultValue={1}
                onChange={onChange}
                type="number"
                required
                className="input-form w-full my-3"
            />
            <div className="flex flex-row items-center justify-between w-full bg-gray-200 text-gray-900 p-4 rounded text-gray-900 font-medium">
                <div className="flex flex-row">
                    <p className="mr-4">₦</p>
                    <p>{formatMoney(price)}</p>
                </div>
                <p>NGN</p>
            </div>
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
    id: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    phone: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tokens: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
};
