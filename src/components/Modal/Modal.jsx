import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
    window.addEventListener("keydown", this.handleKeydowm);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydowm);
  }

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  handleKeydowm = (e) => {
    console.log(e.code);
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">{this.props.children}</div>
        <img src={this.props.largeImage} alt={this.props.altText} />
      </div>,
      modalRoot
    );
  }
}
