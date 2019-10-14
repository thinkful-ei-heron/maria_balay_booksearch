import React from 'react';
import Header from './components/Header'
import './App.css'
import BookSearch from './components/BookSearch'
import BookFilter from './components/BookFilter'
import BookList from './components/BookList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  searchBooks = (searchTerm) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}`)
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
        <BookList books={this.state.books}/>
      </div>
    </div>
  );
  }
}

export default App;
