import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ pics }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem pics={pics} />
  </ul>
);
ImageGallery.propTypes = {
  pics: PropTypes.object.isRequired,
};

export default ImageGallery;
