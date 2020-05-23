import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileImage } from '../actions';

export const UploadAvatar = () => {
    const dispatch = useDispatch();
    const { user: { avatar }, token } = useSelector(state => state.auth);
    const { profileImage: { loading } } = useSelector(state => state.profile);
    const [state, setState] = useState({ imageObject: null, imgUrl: avatar, uploading: false });
    const { uploading, imageObject, imgUrl } = state;

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt8M = file.size / 1024 / 1024 < 8;
        if (!isLt8M) {
            message.error('Image must smaller than 8MB!');
        }
        return isJpgOrPng && isLt8M;
    };

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setState({ uploading: true });
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => setState({
                imageObject: info.file.originFileObj,
                imgUrl: imageUrl,
                uploading: false,
            }));
        }
    };

    const uploadButton = (
        <div>
            {uploading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    const handleUpload = () => {
        const avatarImage = new FormData();
        avatarImage.append('avatar', imageObject);
        avatarImage.append('_method', 'PUT');
        dispatch(updateProfileImage({ avatarImage, token }));
    };

    return (
        <>
            <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                action={process.env.REACT_APP_MOCK}
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            <Button
                type="ghost"
                onClick={handleUpload}
                className="rounded"
                disabled={!imageObject}
                loading={loading}
            >
                {loading ? 'Saving' : 'Save'}
            </Button>
        </>
    );
};
