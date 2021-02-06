import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

import QuackAppBar from "./components/quackAppBar.js";
import QuackDrawer from './components/quackDrawer.js';

import MainFeed from "./components/mainFeed.js";
import BirdPage from "./components/birdPage.js";
import UserPage from "./components/userPage.js";
import NoMatchPage from "./components/noMatchPage.js";

export default function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <QuackAppBar />
            <Switch>
                <Route path="/" exact component={MainFeed} />
                <Route path="/bird/:id" component={BirdPage} />
                <Route path="/user/:id" component={UserPage} />
                <Route component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
};