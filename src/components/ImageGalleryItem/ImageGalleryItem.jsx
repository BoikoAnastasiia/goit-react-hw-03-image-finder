const ImageGalleryItem = ({ pics }) =>
  pics.map(({ id, previewURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      <img src={previewURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));

export default ImageGalleryItem;
