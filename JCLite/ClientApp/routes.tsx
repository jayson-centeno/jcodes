import * as React from 'react';
import { Route } from 'react-router-dom';
import { Index } from './containers/Index';    
import Home from './containers/Home/Home';
import ContactForm from './containers/contact/Contact';
import FetchData from './containers/FetchData/FetchData';
import About from './containers/About/About';
import Counter from './containers/Counter/Counter';

export const routes = <Index>
    <Route exact={true} path='/' component={Home}>Test</Route>
</Index>