import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Second from './second';
import './App.css';

// 

import App from './App';
// import MyComponent from './Mycomponent';
//  import Users from './Users';
// import Second from './second';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
    {/* <Users/> */}
   
    {/* <Second/>  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
