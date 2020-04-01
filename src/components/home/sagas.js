import { takeEvery, put, call } from 'redux-saga/effects';
import { message } from 'antd';
import alt from '../../apis/alt';
import { getPropertiesError, getPropertiesSuccess } from './actions';
import { PROPERTIES } from './actionTypes';

const { GET_PROPERTIES } = PROPERTIES;

function* getPropertiesSaga() {
    try {
        const response = yield call(alt.get, '/property');
        const { data } = response.data;
        yield put(getPropertiesSuccess(data));
    } catch (error) {
        const { data: { data } } = error.response;
        message.error(data);
        yield put(getPropertiesError(data));
    }
}

export function* watchGetPropertiesSaga() {
    yield takeEvery(GET_PROPERTIES, getPropertiesSaga);
}
