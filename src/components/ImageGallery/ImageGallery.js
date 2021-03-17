import React from 'react';

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <ImageGalleryItem key={image.id} images={images} />
      ))}
    </ul>
  );
};

export default ImageGallery;
/*const ImageGalleryItem = ({ id }) => {
  return (
    <li key={id}>
      <img src="" alt="" />
    </li>
  );
};

const ImageGallery = ({ images }) => {
return (
    <ul>
      {images.map(image => (
        <ContactListItem key={image.id} {...image} />
      ))}
    </ul>
  );
};*/
