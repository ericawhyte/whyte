import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Work from './containers/Work';
import Experiments from './containers/Experiments';
import Bfff from './containers/Bfff';
import Bcs from './containers/Bcs';
import Gm from './containers/Gm';
import Mastercard from './containers/Mastercard';
import Wind from './containers/Wind';
import Vagifem from './containers/Vagifem';
import Getty from './containers/Getty';
import Td from './containers/Td';
import Adidas from './containers/Adidas';
import Danone from './containers/Danone';
import Patterns from './containers/Patterns';
import Speedometer from './containers/Speedometer';
import Stickies from './containers/Stickies';
import Forest from './containers/Forest';
import Snowflake from './containers/Snowflake';

export default () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/work" exact component={Work} />
        <Route path="/experiments" exact component={Experiments} />
        <Route path="/work/bfff" exact component={Bfff} />
        <Route path="/work/bcs" exact component={Bcs} />
        <Route path="/work/gm" exact component={Gm} />
        <Route path="/work/mastercard" exact component={Mastercard} />
        <Route path="/work/wind" exact component={Wind} />
        <Route path="/work/vagifem" exact component={Vagifem} />
        <Route path="/work/getty" exact component={Getty} />
        <Route path="/work/td" exact component={Td} />
        <Route path="/work/adidas" exact component={Adidas} />
        <Route path="/work/danone" exact component={Danone} />
        <Route path="/experiments/css-patterns" exact component={Patterns} />
        <Route path="/experiments/css-speedometer" exact component={Speedometer} />
        <Route path="/experiments/dance-of-the-stickies" exact component={Stickies} />
        <Route path="/experiments/parallax-forest" exact component={Forest} />
        <Route path="/experiments/snowflake" exact component={Snowflake} />
    </Switch>
);
