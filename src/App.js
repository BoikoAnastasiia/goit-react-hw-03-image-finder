import { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import LoaderComponent from "./components/Loader";
import Button from "./components/Button";
import Modal from "./components/Modal";
import picsApi from "./services/pics-api";
import ErrorBoundary from "./components/error";

class App extends Component {
  state = {
    pics: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    largeImg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPics();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pics: [],
      error: null,
    });
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
    const { pics, isLoading, showModal, largeImg } = this.state;
    const shouldRenderLoadButton = pics.length > 0 && !isLoading;
    console.log(pics);
    return (
      <ErrorBoundary>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery pics={pics} />

        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImg} />
        )}
        {isLoading && <LoaderComponent />}

        {shouldRenderLoadButton && <Button onClick={this.fetchPics} />}
      </ErrorBoundary>
    );
  }
}

export default App;
