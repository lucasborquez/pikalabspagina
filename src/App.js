import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>3D Printing Business</h1>
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
        <footer>
          <p>&copy; 2023 3D Printing Business</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;