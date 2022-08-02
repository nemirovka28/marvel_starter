import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './service/MarvelService.js';
import './style/style.scss';

const marvelService = new MarvelService();

marvelService.getCharacters(1011052).then(res => res.data.results.forEach(item => console.log(item.name)))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

