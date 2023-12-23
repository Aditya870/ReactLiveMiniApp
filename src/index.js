import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';

//adding font awesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey,faTimes, faXmark} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey,faTimes, faXmark);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
      <BrowserRouter>
          <App />
      </BrowserRouter>
     </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
