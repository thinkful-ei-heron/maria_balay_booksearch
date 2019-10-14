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
      books: [],
      searchTerm: '',
      loading: false,
      error: null
    }

  searchBooks = (term) => {
    this.setState({searchTerm: term, loading:true, error:null})  
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=ebooks`)
      .then(res => res.ok ? res.json() : Promise.reject('Something went wrong'))
      .then(books => this.setState({
        books: books.items,
      loading:false}))
      .catch(error => this.setState({error, loading:false}));

  }

  bookTypeFilter = (searchTerm, bookType, printType) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=${bookType}&printType=${printType}`)
      .then(res => res.ok ? res.json() : Promise.reject('Something went wrong'))
      .then(books => this.setState({
        books: books.items,
      loading:false}))
      .catch(error => this.setState({error, loading:false}));

  }


  render() {
    if(this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }
    else if (this.state.loading) {
      return <div>loading...</div>
    }
  return (
    <div className="App">
      <Header />
      <BookSearch searchBooks={this.searchBooks}/>
      <BookFilter searchTerm={this.state.searchTerm} bookTypeFilter={this.bookTypeFilter} />
      <div>
        <BookList currency={USCurrencyFormat} books={this.state.books}/>
      </div>
    </div>
  );
  }
}

export default App;
