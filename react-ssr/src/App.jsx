import React from 'React';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import APost from './pages/aPost';

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/post" component={ APost } />
        </Switch>
    </div>
)
