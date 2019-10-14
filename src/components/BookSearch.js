import React from 'react'
import './BookSearch.css'

class BookSearch extends React.Component {
    searchTermHandle = (e) => {
        e.preventDefault()
        this.props.searchBooks(e.target.search_input.value)
    }
    render() {
        return (
            <form className="book-search" onSubmit={this.searchTermHandle}>
                <label htmlFor="search-input">Search:</label>
                <input 
                    type="text" 
                    placeholder="Enter search term"
                    name="search_input"
                />
                <button type="submit">Find Books</button>
            </form>
        )
    }
}

export default BookSearch