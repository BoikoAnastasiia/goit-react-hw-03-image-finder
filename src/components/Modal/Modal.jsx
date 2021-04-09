const Modal = (largeImage, altText) => (
  <div className="Overlay">
    <div className="Modal">
      <img src={largeImage} alt={altText} />
    </div>
  </div>
);
export default Modal;
