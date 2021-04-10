import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ pics, onClickModal }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem pics={pics} onClickModal={onClickModal} />
  </ul>
);
ImageGallery.propTypes = {
  pics: PropTypes.object.isRequired,
};

export default ImageGallery;
