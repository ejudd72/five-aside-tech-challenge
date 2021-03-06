import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './style.css';
import store from  "./data/store";
import { Provider } from "react-redux";

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const render = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <App />,
         </Provider>,
        document.getElementById("root")
    );
}

store.subscribe(render);

render();

// store.dispatch({ type: "addFields" });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
