const ImageGalleryItem = ({ pics }) =>
  pics.map(({ id, previewURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      {console.log("pics in imgitem", pics)}
      <img src={previewURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));

export default ImageGalleryItem;
