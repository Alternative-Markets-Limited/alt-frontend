import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PropTypes from 'prop-types';

export const GridGallery = ({ gallery }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const imageList = new Array(gallery.length);

    const randomDimension = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < imageList.length; i++) {
        imageList[i] = {
            height: randomDimension(2, 3),
            src: gallery[i],
            width: randomDimension(3, 4),
        };
    }

    // eslint-disable-next-line no-unused-vars
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={imageList} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={imageList.map(x => ({
                                ...x,
                                caption: x.title,
                                srcset: x.srcSet,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
};

GridGallery.propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};
