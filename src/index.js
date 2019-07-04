import React from "react";
import ReactDOM from "react-dom";
import './scss/style.scss';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
};

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));