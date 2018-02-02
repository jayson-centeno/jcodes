import * as React from 'react';
import { Route } from 'react-router-dom';
import { Index } from './containers/Index';    
import Home from './containers/Home/Home';
import FetchData from './containers/FetchData/FetchData';
import Counter from './containers/Counter/Counter';
import About from './containers/About/About';

export const routes = <Index>
    <Route exact path='/' component={Home}>Test</Route>
    <Route path='/about' render={props => (
        <About {...props} Title="About" />
    )} />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
</Index>