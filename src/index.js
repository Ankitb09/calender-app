import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store';

const App = ({store}) => {
    return (
        <Provider store={store}>
            <div>eed</div>
        </Provider>
    )
};

ReactDOM.render(<App store/>, document.getElementById('root'));