import React from 'react';
import defaultImg from '../ImageGalleryItem/default.jpg';
import PropTypes from 'prop-types';
import './ImageGallery.scss';
import '../ImageGalleryItem/ImageGalleryItem.scss';

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  onImage,
}) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        className="ImageGalleryItem_image"
        src={webformatURL}
        alt={tags}
        onClick={() => onImage(largeImageURL)}
      />
    </li>
  );
};

const ImageGallery = ({ images, onImage }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} {...image} onImage={onImage} />
      ))}
    </ul>
  );
};
ImageGalleryItem.defaultProps = {
  images: [],
  webformatURL: defaultImg,
  largeImageURL: defaultImg,
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),

  onImage: PropTypes.func,
};
export default ImageGallery;
