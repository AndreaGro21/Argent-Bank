import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from "./redux/store/store.jsx";
import { useDispatch, } from "react-redux";
import { setLogIn } from './redux/profileTokenSlice';
/* import { useNavigate } from "react-router-dom" */

const root = ReactDOM.createRoot(document.getElementById('root'));


function LocalStorageSet() {
    const dispatch = useDispatch();
    /* const navigate = useNavigate() */
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(setLogIn(token));
       /*  return navigate("/User") */
      }
    });}

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
export default LocalStorageSet;