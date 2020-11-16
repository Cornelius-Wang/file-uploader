import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from './SearchBox/SearchBox.js';
import FilterOptions from '../FilterableList/FilterOptions.js';

class SearchBar extends Component {
    render() {
        return (
            <div ClassName='SearchBar'>
                <div ClassName='SearchBar__heading'>
                    <h1>File Uploader</h1>
                </div>
                <div ClassName='SearchBar__controls'>
                    <SearchBox />
                    <FilterOptions />
                </div>
            </div>
        )
    }
}

export default SearchBar;