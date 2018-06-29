import * as React from 'react';
import { Route } from 'react-router-dom';
import { Index } from './containers/Index';    
import Home from './containers/Home/Home';
import ContactForm from './containers/contact/Contact';
import About from './containers/About/About';

import FetchData from './containers/FetchData/FetchData';
import Counter from './containers/Counter/Counter';

export const routes = <Index>
    <Route exact path='/' component={Home} />
    <Route path='/contact' component={ContactForm} />
    <Route path='/about' component={About} />
</Index>