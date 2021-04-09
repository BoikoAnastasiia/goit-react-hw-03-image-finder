import ImageGalleryItem from "../ImageGalleryItem";
const ImageGallery = ({ pics }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem pics={pics} />
  </ul>
);

export default ImageGallery;
