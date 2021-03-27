import React, { Component } from 'react';
//import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { fetchImages } from './services/ApiImage';
//const URL = 'https://pixabay.com/api/';
//const KEY = '19764594-1ff33c8737753e7bf91ee1679';
import './App.scss';
class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    imageUrl: '',
    showModal: false,
    loader: false,
    error: null,
  };
  //вызов запроса при обновлении
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  /*componentDidMount() *1-шаг*
    axios
      .get(
        `${URL}?&key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        // console.log({ images: response.data });
        this.setState({ images: response.data.hits });
      });
  }*/

  onChangeQuery = query => {
    //this.setState({ searchQuery: query });
    //this.fetchImages();
    //handleQuery= query=>
    if (query !== this.state.searchQuery) {
      this.setState({ searchQuery: query, page: 1, images: [], error: null });
    } else {
      alert('this request has already been completed');
    }
  };
  //2-шаг*
  fetchImages = () => {
    const { page, searchQuery } = this.state;
    /*axios
      .get(
        `${URL}?&key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`,
      )*/
    const options = { searchQuery, page };
    this.setState({ loader: true });

    fetchImages(options)
      .then(images => {
        // console.log({ images: response.data });
        //*this.setState({ images: response.data.hits });
        this.setState(prevState => ({
          images: [...prevState.images, ...images], //response.data.hits,
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = url => {
    this.setState({
      imageUrl: url,
    });
    this.toggleModal();
  };

  deleteImg = imageId => {
    console.log('id', imageId);
    console.log(this.state.images);
    this.setState(({ images }) => ({
      images: images.filter(({ id }) => id !== imageId),
    }));
  };

  render() {
    const { images, imageUrl, tags, showModal, loader, error } = this.state;
    const renderLoadMoreBtn = images.length > 0 && !loader;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery
          images={images}
          onImage={this.openModal}
          onClick={this.deleteImg}
        />
        {renderLoadMoreBtn && (
          <Button onClick={this.fetchImages} className="Button" />
        )}
        {loader && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            className="Loader"
          />
        )}
        {error && <h1>No result found!</h1>}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className="modal">
              <img
                src={imageUrl}
                alt={tags}
                className="modal_img"
                onClick={this.openModal}
              />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
