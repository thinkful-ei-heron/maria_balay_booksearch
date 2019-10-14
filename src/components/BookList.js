import React from 'react'
import './BookList.css'

class BookList extends React.Component {
    render() {
        const books = this.props.books.map((item, index) => {
           return (
            <div className="book-list-container">
            <img src={item.volumeInfo.imageLinks.thumbnail} alt="book-thumbnail" />
            <ul>
                <li key={index} className="book-title">{item.volumeInfo.title}</li>
                <li key={index}>{item.volumeInfo.authors[0]}</li>
                <li key={index}>price</li>
                <li key={index}>{item.volumeInfo.description}</li>
            </ul>
            </div>
            )
        })
        return (
            books 
        )
    }
}

export default BookList