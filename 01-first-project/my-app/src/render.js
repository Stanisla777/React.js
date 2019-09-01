import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addPost} from './redux/state'


export let rerendPageTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} appState={state}/>
        </BrowserRouter>, document.getElementById('root')

    );
}

serviceWorker.unregister();
