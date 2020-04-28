import { takeEvery, put } from 'redux-saga/effects';
import { message } from 'antd';
import { getBlogPosts, getSinglePost } from './contentful';
import {
    getPostsSuccess, getPostsError, getPostError, getPostSuccess
} from './actions';
import { POSTS, POST } from './actionTypes';

const { GET_POSTS } = POSTS;
const { GET_POST } = POST;

function* getPostsSaga() {
    try {
        const response = yield getBlogPosts();
        yield put(getPostsSuccess(response));
    } catch (error) {
        message.error('Something went wrong, Please try again');
        yield put(getPostsError(error));
    }
}

function* getPostSaga({ payload }) {
    try {
        const response = yield getSinglePost(payload);
        yield put(getPostSuccess(response[0]));
    } catch (error) {
        message.error('Something went wrong, Please try again');
        yield put(getPostError(error));
    }
}

export function* watchGetPostsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
}
export function* watchGetPostSaga() {
    yield takeEvery(GET_POST, getPostSaga);
}
