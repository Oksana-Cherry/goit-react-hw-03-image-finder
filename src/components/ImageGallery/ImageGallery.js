import React from 'react';
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

export default ImageGallery;
