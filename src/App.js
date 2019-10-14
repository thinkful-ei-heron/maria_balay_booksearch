import React from 'react';
import Header from './components/Header'
import './App.css'
import BookSearch from './components/BookSearch'
import BookFilter from './components/BookFilter'
import BookList from './components/BookList'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends React.Component {
  state = {
      books: []
    }

  searchBooks = (searchTerm) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=ebooks`)
      .then(res => res.json())
      .then(books => this.setState({books: books.items}))
  }

  render() {
  return (
    <div className="App">
      <Header />
      <BookSearch searchBooks={this.searchBooks}/>
      <BookFilter />
      <div>
        <BookList currency={USCurrencyFormat} books={this.state.books}/>
      </div>
    </div>
  );
  }
}

export default App;
