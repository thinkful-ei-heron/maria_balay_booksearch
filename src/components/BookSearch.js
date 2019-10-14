import React from 'react'
import './BookSearch.css'

class BookSearch extends React.Component {
    render() {
        return (
            <form className="book-search">
                <label htmlFor="search-input">Search:</label>
                <input 
                    type="text" 
                    placeholder="Enter search term"
                    name="search-input"
                />
                <button type="submit">Find Books</button>
            </form>
        )
    }
}

export default BookSearch