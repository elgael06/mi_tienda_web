import React, { useEffect, Fragment } from 'react';
import {
    BrowserRouter as Router,
     Switch,
     Route,
     Redirect,
     useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './page/login';
import Error from './page/error';
import Layout from './Components/layout';
import rutas_accesos from './constant/rutas_accesos';

export default () => {
    const state = useSelector(state=>state);

    useEffect(()=>{
        console.log(state);;
         
    });

    return (<Router>
        <Layout>
            <Switch>
                { state.user.id ? <HomeRoute /> : <LoginRoute /> }
            </Switch>
        </Layout>
    </Router>);
}

const HomeRoute = () =>{
    const location = useLocation();

    const undefineUrl = () => rutas_accesos.findIndex(e=>e.url==location.pathname)>-1;

   return (<Fragment>
    {
        rutas_accesos.map(route=><Route
            key         = {route.url} 
            path        = {route.url} 
            component   = {route.component} 
            exact       = {route.exact}
        />)
    }
    <Route path='/' component={()=><Redirect to='/Home' />} exact={true}/>
    {
        undefineUrl() || <Route path='/' component={Error} />
    }
</Fragment>);
}

const LoginRoute =()=>(<Fragment>
    <Route path='/login' component={Login} exact={true}/>  
    <Redirect to='/login' />
</Fragment>);