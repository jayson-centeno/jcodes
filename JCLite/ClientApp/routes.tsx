import * as React from 'react';
import { Route } from 'react-router-dom';
import { Index } from './containers/Index';    
import Home from './containers/Home/Home';
import FetchData from './containers/FetchData/FetchData';
import Counter from './containers/Counter/Counter';
import About from './containers/About/About';
import Contact from './containers/contact/Contact';

export const routes = <Index>
    <Route exact path='/' component={Home}>Test</Route>
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
</Index>