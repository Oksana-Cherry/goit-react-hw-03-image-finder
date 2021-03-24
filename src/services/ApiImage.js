import axios from 'axios';
import PropTypes from 'prop-types';

const URL = 'https://pixabay.com/api/';
const KEY = '19764594-1ff33c8737753e7bf91ee1679';
/*'https://pixabay.com/api/?key=19764594-1ff33c8737753e7bf91ee1679&image_type=photo&orientation=horizontal&per_page=12',*/

/*axios.defaults.baseURL = URL;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
const fetchImages = ({ searchQuery, page }) => {
  return axios
    .get('', {
      params: { searchQuery, page },
    })
    .then(response => response.data.hits);
};*/
const fetchImages = ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `${URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

fetchImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
export { fetchImages };
