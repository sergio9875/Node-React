import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/state';

let retireDom = (state) => {


ReactDOM.render(
    <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             store = {store} />
    </BrowserRouter>,
    document.getElementById('root')
);
}

retireDom(store.getState());
store.subscribe(retireDom);
