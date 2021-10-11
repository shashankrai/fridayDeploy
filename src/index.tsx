import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import AppView from './Views';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <AppView />
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
