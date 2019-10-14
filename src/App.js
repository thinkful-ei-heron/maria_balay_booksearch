import React from 'react';
import Header from './components/Header'
import './App.css'
import BookSearch from './components/BookSearch'
import BookFilter from './components/BookFilter'


function App() {
  return (
    <div className="App">
      <Header />
      <BookSearch />
      <BookFilter />
    </div>
  );
}

export default App;
