import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearchQuery = event => {
    this.setState({ query: event.target.value });
  };

  heandleSendValue = event => {
    event.preventDefault();
    if (this.state.query !== '') {
      this.props.onSendQuery(this.state.query);
      this.setState({ query: '' });
    }
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.heandleSendValue}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            value={this.state.query}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchQuery}
          />
        </form>
      </header>
    );
  }
}

Searchbar.protoType = {
  heandleSendValue: PropTypes.func,
  handleSearchQuery: PropTypes.func,
};

export default Searchbar;
