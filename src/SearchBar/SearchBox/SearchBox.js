import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
    render() {
        return (
            <div ClassName='SearchBox'>
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder='Search Term' />
            </div>
        )
    }
}

export default SearchBox;