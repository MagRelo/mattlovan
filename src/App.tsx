import React from 'react';

import Header from './components/header';
import Home from './pages/home';

function App() {
  return (
    <div className='app'>
      <Header />

      <div>
        <Home />
      </div>

      <div className='stripe'></div>
      <footer>
        <div className='container'>
          <p>{new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
