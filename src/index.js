// If this index.js file is the starting point for our webpack, we need a reference to the index.HTML file, 
// We can do that with a special require statement requiring file-loader which we installed as a dev dependency
// This loads the index.html file into webpack as well 
require('file-loader?name=[name].ext!./index.html')
import React from "react";
import ReactDOM from 'react-dom'
import App from "./App";
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// import React from "react";
// import ReactDOM from 'react-dom'
// import { App } from './App';
// const app = document.getElementById('root');
// ReactDOM.render(<App />, app)