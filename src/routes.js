import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
     Switch,
     Route
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './page/home';
import Login from './page/login';
import Error from './page/error';

export default () => {
    const state = useSelector(state=>state);

    useEffect(()=>{
        console.log(state) 
    });

    return (<Router>
        <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/login' component={Login} exact={true}/>          
            <Route path='/' component={Error} />
        </Switch>
    </Router>);
}