import React from 'react'
import './BookFilter.css'

class BookFilter extends React.Component {
    bookFilterComp = (e) => {
        e.preventDefault()
        const bookType = e.currentTarget.book_type.value
        const printType = e.currentTarget.print_type.value
        const searchTerm = this.props.searchTerm
        this.props.bookTypeFilter(searchTerm, bookType, printType)
    }
    render() {
        return (
            <form className="book-filter" onChange={this.bookFilterComp}>
                <label htmlFor="print-type">Print Type:</label>
                <select className="print_type" id="print_type">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="book-type">Book Type:</label>
                <select className="book-type" id="book_type">
                    <option value="ebooks">All</option>
                    <option value="free-ebooks">Free E-Books</option>
                    <option value="paid-ebooks">E-Books for purchase</option>
                </select>
            </form>
        )
    }
}

export default BookFilter