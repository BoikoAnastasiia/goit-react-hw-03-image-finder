import propTypes from "prop-types";

import defaultImage from "./default.jpg";

const ImageGalleryItem = ({ pics }) =>
  pics.map(({ id, previewURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      {console.log("pics in imgitem", pics)}
      <img src={previewURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  previewURL: defaultImage,
};

ImageGalleryItem.propTypes = {
  id: propTypes.string.isRequired,
  previewURL: propTypes.string,
  tags: propTypes.string.isRequired,
};
