import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Se rederiza componente principal en el DOM virtual para mostrarse en HTML
ReactDOM.render(<App />, document.getElementById('root'));

// Para trabajar con servidor local puede usarse register();
serviceWorker.unregister();
