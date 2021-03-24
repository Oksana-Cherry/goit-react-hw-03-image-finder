import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';
class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = event => {
    this.setState({ query: event.target.value });
  };

  heandleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.query !== '') {
      this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
    }
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.heandleSubmit}>
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.heandleSubmit}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChangeQuery}
          />
        </form>
      </header>
    );
  }
}

Searchbar.protoType = {
  heandleSubmit: PropTypes.func,
  handleChangeQuery: PropTypes.func,
};

export default Searchbar;
