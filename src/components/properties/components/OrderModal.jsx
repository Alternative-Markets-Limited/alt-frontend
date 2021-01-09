import React from 'react';
import {
    Modal, InputNumber, Select, Button
} from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { formatMoney, determineMaxFraction } from '../../common/helpers';

const { Option } = Select;

export const OrderModal = ({
    visible, handleOk, handleCancel, onChange, price, tokens, totalAmount,
    orders, id, yieldPeriod, onSelectChange, yieldValue, handleSubmit, onSelect, returns_frequency,
}) => {
    const { loading } = useSelector(state => state.property);

    const maxFraction = determineMaxFraction(orders, { id, tokens }, 200);

    return (
        <>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <p>How many alts would you like to invest in?</p>
                <small className="italic text-gray-500">{`(You can only purchase ${maxFraction} alts on this property)`}</small>
                <InputNumber
                    min={1}
                    max={maxFraction}
                    onChange={onChange}
                    type="number"
                    className="input-form w-full my-3"
                    placeholder="Number of alts"
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
                <Select
                    className="input-form w-full mb-3"
                    placeholder="How frequently would you like your returns?"
                    onChange={onSelect}
                >
                    <Option value="monthly">Monthly</Option>
                    <Option value="quarterly">Quarterly</Option>
                    <Option value="anually">Annually</Option>
                </Select>
                <div className="flex flex-row items-center justify-between w-full bg-gray-200 text-gray-900 p-4 rounded text-gray-900 font-medium">
                    <div className="flex flex-row">
                        <p className="mr-4">₦</p>
                        <p>{formatMoney(price)}</p>
                    </div>
                    <p>NGN</p>
                </div>
                {!!totalAmount && yieldValue && returns_frequency && (
                    <Button onClick={handleSubmit} className="btn-primary w-full my-3 py-4 text-white hover:text-white" loading={loading}>
                        {loading ? 'Please Wait' : 'Purchase'}
                    </Button>
                )}
            </Modal>
        </>
    );
};

OrderModal.propTypes = {
    handleCancel: PropTypes.func.isRequired,
    handleOk: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelectChange: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(PropTypes.shape()).isRequired,
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
