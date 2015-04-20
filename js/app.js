import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Homepage from './components/Homepage/Homepage.js'

let App = React.createClass({
    render() {
        return (
            <div className="travel-planner">
                <div className="nav">
                    <Link to="app">Travel planner</Link>
                </div>
                <div className="content">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Homepage}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});