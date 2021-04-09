import { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import LoaderComponent from "./components/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal";
// import picsApi from "./services/pics-api";

class App extends Component {
  // state = {
  //   pics: [],
  //   currentPage: 1,
  //   searchQuery: "",
  //   isLoading: false,
  //   error: null,
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     this.fetchPics();
  //   }
  // }

  // onChangeQuery = (query) => {
  //   this.setState({
  //     searchQuery: query,
  //     currentPage: 1,
  //     pics: [],
  //     error: null,
  //   });
  // };

  // fetchPics = () => {
  //   const { currentPage, searchQuery } = this.state;
  //   const options = { searchQuery, currentPage };

  //   this.setState({ isLoading: true });

  //   picsApi
  //     .fetchPics(options)
  //     .then((pics) => {
  //       this.setState((prevState) => ({
  //         pics: [...prevState.pics, ...pics],
  //         currentPage: prevState.currentPage + 1,
  //       }));
  //     })
  //     .catch((error) => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  render() {
    return (
      <>
        <h1>Test </h1>
        {/* <Searchbar onSubmit={this.onChangeQuery} /> */}
        {/* <ImageGallery /> */}
        {/* <Modal /> */}
        {/* <LoaderComponent /> */}
        {/* <Button /> */}
      </>
    );
  }
}

export default App;
