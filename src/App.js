import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js'
import FilterableList from './FilterableList/FilterableList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;
