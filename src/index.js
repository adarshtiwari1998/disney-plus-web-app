import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* this is part of redux */}
    {/* this means that when login functionality implement then user going into index page or internal file */}
     {/* when everything happens login or logout app is the child components */}
    <Provider store={store}>
      {/* app is the child component of the store */}
     <App />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
