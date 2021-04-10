import React, { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import LoaderComponent from "./components/Loader";
import Button from "./components/Button";
import Modal from "./components/Modal";
import picsApi from "./services/pics-api";
import ErrorBoundary from "./components/error";

class App extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  state = {
    pics: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    largeImg: "",
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.pics.length < this.state.pics.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPics();
    }
    if (snapshot !== null) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  // findPic = (event) => {
  //   if (this.state.pics.id === event.currentTarget.id) {
  //     this.setState({ largeImg: this.state.pics.src });
  //   }
  // };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pics: [],
      error: null,
    });
  };

  showTarget = (event) => {
    console.dir(event.currentTarget);
  };

  fetchPics = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    picsApi
      .fetchPics(options)
      .then(({ hits }) => {
        this.setState((prevState) => ({
          pics: [...prevState.pics, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { pics, isLoading, showModal, largeImg, alt } = this.state;
    const shouldRenderLoadButton = pics.length > 0 && !isLoading;

    return (
      <ErrorBoundary ref={this.listRef}>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery pics={pics} onClickModal={this.showTarget} />

        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImg} alt={alt} />
        )}
        {isLoading && <LoaderComponent />}

        {shouldRenderLoadButton && <Button loadMore={this.fetchPics} />}
      </ErrorBoundary>
    );
  }
}

export default App;
