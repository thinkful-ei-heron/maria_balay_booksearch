import React from 'react'
import './BookList.css'

class BookList extends React.Component {
    render() {
        return (
            <div className="book-list-container">
                <img src="#" alt="book-thumbnail"/> 
                <ul>
                    <li className="book-title">Title</li>
                    <li>Author</li>
                    <li>Price</li>
                    <li>description</li>
                </ul>
            </div>
            
        )
    }
}

export default BookList