import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Work from './containers/Work';
import Experiments from './containers/Experiments';

export default () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/work" exact component={Work} />
        <Route path="/experiments" exact component={Experiments} />
    </Switch>
);