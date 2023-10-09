import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from "./redux/store/store.jsx";
const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem("token")
if(token){
//fare un dispatch
}
root.render(
<Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

