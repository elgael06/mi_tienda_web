import React from 'react';
import ButtonSesion from './ButtonSesion';
import UserSesion from './UserSesion';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { inicioSesionGoogle, cerrarSesionGogle } from '../../services/firebase';
import { Add_user } from '../../store/actions';

const TopAppBar = ({onClick})=>{
    const {user} = useSelector(state => state);
    const dispatch = useDispatch();  
    const history = useHistory();

    const iniciarSesion = async () =>{
        dispatch({type:'LOADING'});
        if(user.googleUser){
            console.log('logout');
            history.push('/login');

            cerrarSesionGogle();
            
            setTimeout(()=> dispatch({type:'DONE'}),2000);
            
            return await dispatch({type:'REMOVE_USER'});
        }
        const res =  await inicioSesionGoogle();

        if(res.uid){
            history.push('/');
            dispatch(Add_user({
                id      : res.uid,
                name    : res.displayName,
                email   : res.email,
                photo   : res.foto,
                googleUser : true,
                credential:res.credential
            }));
            dispatch({type:'DONE'});
        }
        dispatch({type:'DONE'});
    }

    return(<AppBar position="static">
    <Toolbar>
      <IconButton onClick={onClick} edge="start" color="inherit" aria-label="menu">
        <Menu />
      </IconButton>
      <Typography variant="h6">
        Nombre de la App
      </Typography>
        {user.googleUser ?
          <UserSesion onClose={iniciarSesion} usuario={user} /> 
          : <ButtonSesion iniciarSesion={iniciarSesion}/>}            
    </Toolbar>
  </AppBar>);
}

export default TopAppBar;