import propTypes from "prop-types";

import defaultImage from "./default.jpg";

const ImageGalleryItem = ({ pics, onClickModal }) =>
  pics.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={onClickModal}
        srcSet={largeImageURL}
      />
    </li>
  ));

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  webformatURL: defaultImage,
};

ImageGalleryItem.propTypes = {
  id: propTypes.string.isRequired,
  webformatURL: propTypes.string,
  tags: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
};
