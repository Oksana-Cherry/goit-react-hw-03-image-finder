import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
/*URL = "https://pixabay.com/api/?key
api-key = 19764594-1ff33c8737753e7bf91ee1679*/
const URL = 'https://pixabay.com/api/';
const KEY = '19764594-1ff33c8737753e7bf91ee1679';
class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidMount() {
    axios
      .get(
        `${URL}?&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        console.log({ images: response.data.images });
        this.setState({ images: response.data.images });
      });
  }
  handleQuery = query => {
    if (query !== this.state.queryResult) {
      this.setState({ queryResult: query, page: 1, images: [], error: false });
    } else {
      alert('this request has already been completed');
    }
  };
  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSendQuery={this.handleQuery} />
        <ImageGallery images={images} />
      </div>
    );
  }
}
export default App;
