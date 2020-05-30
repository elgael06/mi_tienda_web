import React, { useState, Fragment } from 'react';
import { SwipeableDrawer, ListItem, ListItemIcon, List, ListItemText, AppBar, Toolbar, IconButton, Typography, Button, Divider, ListItemAvatar, Avatar, Popover } from '@material-ui/core';
import { AcUnitSharp,Menu,SettingsPower,AccountCircleOutlined } from '@material-ui/icons';
import usuarioMale from '../../assets/img/UserMale.webp';
import { Link, useHistory } from 'react-router-dom';
import { inicioSesionGoogle } from '../../services/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { Add_user } from '../../store/actions';


export default function Layout({children}){
    const [toggleDrawer, settoggleDrawer] = useState(false);

    return(<Fragment>   
        <TopAppBar
            onClick={()=>settoggleDrawer(true)}
        />
        <DrawerLayout
            settoggleDrawer={settoggleDrawer}
            toggleDrawer={toggleDrawer}
        />
        <main style={{padding:20}}>{children}</main>
    </Fragment>);

}

const TopAppBar = ({onClick})=>{
    const {user} = useSelector(state => state);
    const dispatch = useDispatch();  

    const iniciarSesion = async () =>{
        if(user.googleUser){
            return dispatch({type:'REMOVE_USER'});
        }

        const res =  await inicioSesionGoogle();
        dispatch(Add_user({
            id      : res.uid,
            name    : res.displayName,
            email   : res.email,
            photo   : res.foto,
            googleUser : true,
            credential:res.credential
        }))
    }

    return(<AppBar position="static">
    <Toolbar>
      <IconButton onClick={onClick} edge="start" color="inherit" aria-label="menu">
        <Menu />
      </IconButton>
      <Typography variant="h6">
        Nombre de la App
      </Typography>
        {user.googleUser ?  <UserSesion onClose={iniciarSesion} usuario={user} /> : <ButtonSesion iniciarSesion={iniciarSesion}/>}            
    </Toolbar>
  </AppBar>);
}
const UserSesion = ({usuario,onClose}) =>{
    const [open,setopen] = useState(false);
   return (<Button 
        style={{
            position:'absolute',
            right:5
        }} color="inherit"
        onClick={()=>{setopen(!open)}}
        >
            
        <Avatar src={usuario.photo} alt={usuario.email}  />
        <Popover
            open={open}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',        
        }}>
            <List>   
                <ListItem>             
                    <ListItemText
                        style={{
                            float: 'right',
                            margin: '10px'
                        }}
                        primary={usuario.name} secondary={usuario.email} />
                    </ListItem>
                    <Divider />
                    <ListItem  button onClick={onClose} >
                    <ListItemIcon >
                        <SettingsPower />
                    </ListItemIcon>
                    <ListItemText primary='Salir'/>
                </ListItem>
            </List>
        </Popover>
    </Button>);
}
const ButtonSesion = ({iniciarSesion})=>(<Button 
    style={{
        position:'absolute',
        right:10
    }} color="inherit"
    onClick={iniciarSesion}
    >
         <AccountCircleOutlined />
         <span style={{padding:5}} >{' '}Login Google.</span>
</Button>);

const DrawerLayout = ({settoggleDrawer,toggleDrawer})=>{
    const history = useHistory();
    const handleToggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        settoggleDrawer(open);
    }
    const redirect = url =>{
        history.push(url)
    }
    return(<SwipeableDrawer 
        anchor={'left'} 
        open={toggleDrawer} 
        onOpen={handleToggleDrawer(true)}
        onClose={handleToggleDrawer(false)}>
        <div className='jss276' style={{height:64}}>
            <List  className='user_drawer-bar'>
                <Link to='/'>
                <ListItem>
                    <ListItemAvatar>
                        <img 
                            src={usuarioMale} 
                            alt='Avatar' 
                            height='26'
                        />
                    </ListItemAvatar>
                        <ListItemText style={{color:'#FFF'}} primary='Logo de App' />
                </ListItem>
                </Link>
            </List>            
        </div>
        <Divider />
        <div            
            role="presentation"
            style={{
                width: 250,
            }}
            onClick={handleToggleDrawer(false)}>                
            <List>                
                <ListItem  button>
                    <ListItemIcon >
                        <AcUnitSharp />
                    </ListItemIcon>
                    <ListItemText primary='Algo'/>
                </ListItem>
                <Divider />
                <ListItem  button onClick={()=>redirect('/login')} >
                    <ListItemIcon >
                        <SettingsPower />
                    </ListItemIcon>
                    <ListItemText primary='Salir'/>
                </ListItem>
            </List>
        </div>
    </SwipeableDrawer>);
}
