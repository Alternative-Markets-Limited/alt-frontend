import { PROPERTY, ORDER } from './actionTypes';

const {
    GET_PROPERTY, GET_PROPERTY_ERROR, GET_PROPERTY_SUCCESS, CLEAN_PROPERTY,
} = PROPERTY;

const { CREATE_ORDER, CREATE_ORDER_ERROR, CREATE_ORDER_SUCCESS } = ORDER;

export const getProperty = data => ({
    payload: data,
    type: GET_PROPERTY,
});

export const getPropertySuccess = property => ({
    payload: property,
    type: GET_PROPERTY_SUCCESS,
});

export const getPropertyError = error => ({
    payload: error,
    type: GET_PROPERTY_ERROR,
});

export const cleanProperty = () => ({
    type: CLEAN_PROPERTY,
});

export const createOrder = data => ({
    payload: data,
    type: CREATE_ORDER,
});

export const createOrderSuccess = data => ({
    payload: data,
    type: CREATE_ORDER_SUCCESS,
});

export const createOrderError = error => ({
    payload: error,
    type: CREATE_ORDER_ERROR,
});
