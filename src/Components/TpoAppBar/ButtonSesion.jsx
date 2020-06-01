import React from 'react'
import { AccountCircleOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';


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

export default ButtonSesion;
