import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

export default () =>{
    const dispatch = useDispatch(); 


    const handleMensaje = e =>{
        console.log('boton',e)
        dispatchMensaje(e,e)
    }

    const dispatchMensaje=(message,severity)=>{
        dispatch({
            type:'SHOW_ACTION',
            mesaje:{
                show:true,
                message,
                severity,
                actionsText:'cerrar'
            }
        });
    }

    return(<div>
        <span>home</span>
        <Button name='info' variant="outlined" color="primary" onClick={()=>handleMensaje('info')}>Mensage 1</Button>
        <Button name='error' color="secondary" onClick={()=>handleMensaje('error')}>Mensage 2</Button>
        <Button name='warning' color="inherit" onClick={()=>handleMensaje('warning')}>Mensage 3</Button>
        <Button name='success' onClick={()=>handleMensaje('success')}>Mensage 4</Button>
    </div>);
}
