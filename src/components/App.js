import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Month from '../containers/Month';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:year/:month" component={Month} />
                <Route path="/" component={Month} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
