import React from 'react'
import './BookList.css'

class BookList extends React.Component {
    render() {
        const books = this.props.books.map((item, index) => {
           return (
            <div key={index} className="book-list-container">
            <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="book-thumbnail" />
            <ul>
                <li className="book-title">{item.volumeInfo.title}</li>
                <li>{(item.volumeInfo.authors) ? item.volumeInfo.authors.join(' ') : ''}</li>
                <li>
                    {(item.saleInfo.saleability === 'FOR_SALE') ? this.props.currency.format(item.saleInfo.retailPrice.amount) : 'Free'}
                </li>
                <li>{item.volumeInfo.description}</li>
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