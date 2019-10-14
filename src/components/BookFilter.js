import React from 'react'
import './BookFilter.css'

class BookFilter extends React.Component {
    render() {
        return (
            <div className="book-filter">
                <label htmlFor="print-type">Print Type:</label>
                <select className="print-type" name="print-type">
                    <option value="all">All</option>
                    <option value="book">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="book-type">Book Type:</label>
                <select className="book-type" name="book-type">
                    <option value="ebooks">All</option>
                    <option value="free-ebooks">Free E-Books</option>
                    <option value="paid-ebooks">E-Books for purchase</option>
                </select>
            </div>
        )
    }
}

export default BookFilter