import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import configureStore from './store/store';
import {Provider} from "react-redux";
import { checkLoggedIn } from "./services/UserService";

// let preloadedState = {};
// const store = configureStore(preloadedState);
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById("root")
// );

const renderApp = preloadedState => {
    const store = configureStore(preloadedState);
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
    );
    window.getState = store.getState;
};
(async () => renderApp(await checkLoggedIn()))();

// FOR TESTING, remove before production


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
