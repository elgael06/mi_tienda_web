import React, { useEffect, Fragment, StrictMode } from 'react';
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
                <StrictMode>
                { state.user.id ? <HomeRoute /> : <LoginRoute /> }
                </StrictMode>
            </Switch>
        </Layout>
    </Router>);
}

const HomeRoute = () =>{
    const location = useLocation();

    const parametroRuta = (ruta='/') =>{
        const url = ruta.split('/')[1];
        
        return url;
    }

    const undefineUrl = () => rutas_accesos.findIndex(e=>parametroRuta(e.url) === parametroRuta(location.pathname)) > -1;

   return (<Fragment>
    {
        rutas_accesos.map(route=>{
            console.log(route);            
            return(<Route
                key         = {route.url} 
                path        = {route.url} 
                children    = {<route.component />} 
                exact      
            />)
        })
    }
    <Route path='/' component={()=><Redirect to='/Home' />} exact={true}/>
    {
        undefineUrl() || <Route path='*' component={Error} />
    }
</Fragment>);
}

const LoginRoute =()=>(<Fragment>
    <Route path='/login' component={Login} exact={true}/>  
    <Redirect to='/login' />
</Fragment>);

