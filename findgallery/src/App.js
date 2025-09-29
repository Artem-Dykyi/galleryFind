import { Component } from "react";
import axios from "axios";
import { Searchbar } from "./components/Searchbar";
import { ImageGallery } from "./components/ImageGallery";
import { Modal } from "./components/Modal";
import { Loader } from "./components/Loader";
import "../src/index.css";

export class App extends Component {
  state = {
    photos: [],
    showModal: false,
    selectPhoto: "",
    page: 1,
    inputValue: "",
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    if (!this.state.inputValue.trim()) {
      return;
    }
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.inputValue}&page=${this.state.page}&key=49720943-65d54ece17a872b9e08aac171&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...response.data.hits],
        }));
      });
  };

  openModal = (largeImageURL) => {
    this.setState({ showModal: true, selectPhoto: largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectPhoto: "" });
  };

  plusOnePage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchPhotos();
    }
  }

  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ photos: [], page: 1 }, () => {
      this.fetchPhotos();
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar
          valueSearch={this.state.inputValue}
          submitChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ImageGallery 
          itemPhotos={this.state.photos} 
          onOpen={this.openModal} />

        {this.state.showModal && (
          <Modal
            largePhoto={this.state.selectPhoto}
            onClose={this.closeModal}
          />
        )}

        {this.state.photos.length > 0 && <Loader sumPage={this.plusOnePage} />}
      </div>
    );
  }
}

export default App;
