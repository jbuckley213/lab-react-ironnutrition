import React, { Component } from 'react'
import './search.css'

class Search extends Component {

    state = {
        search: ''
    }

    handleSearch = (event) => {
        const value = event.target.value;

        this.props.handleSearchResults(value);

        this.setState({search:value})
    }

    render() {
        return (
            <div className= 'control'>
                <input className="input is-primary" type="text" name="search" placeholder="search" onChange={this.handleSearch} value={this.state.search} />

            </div>
        )
    }
}


export default Search 
