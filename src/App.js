import React from 'react';
import Header from './components/Header'
import './App.css'
import BookSearch from './components/BookSearch'
import BookFilter from './components/BookFilter'
import BookList from './components/BookList'


function App() {
  return (
    <div className="App">
      <Header />
      <BookSearch />
      <BookFilter />
      <div>
        <BookList/>
      </div>
    </div>
  );
}

export default App;
