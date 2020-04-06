import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>

    </BrowserRouter>,
    document.getElementById('root')
);


