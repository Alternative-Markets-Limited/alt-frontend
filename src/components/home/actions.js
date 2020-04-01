import { PROPERTIES } from './actionTypes';

const { GET_PROPERTIES, GET_PROPERTIES_ERROR, GET_PROPERTIES_SUCCESS } = PROPERTIES;

export const getProperties = () => ({
    type: GET_PROPERTIES,
});

export const getPropertiesSuccess = properties => ({
    payload: properties,
    type: GET_PROPERTIES_SUCCESS,
});

export const getPropertiesError = error => ({
    payload: error,
    type: GET_PROPERTIES_ERROR,
});
