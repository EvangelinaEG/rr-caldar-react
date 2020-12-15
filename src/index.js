import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import express from "express";
/* const database = require('./database.js');
const express = require('express');

const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
 */
// Constants
//const PORT = process.env.PORT || 4000;

// App
//const app = express();

// Support parsing of application/json type post data
//app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
//app.use(bodyParser.urlencoded({ extended: true }));

// Support Cross-Origin Resource Sharing
/* app.use(cors());
    app.use(database);
    app.use(bodyParser.json())
    app.use(router);
 */
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

/* app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
