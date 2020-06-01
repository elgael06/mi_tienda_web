import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux';

export default () =>{
    const dispatch = useDispatch(); 


    const handleMensaje = (e,event) =>{
        console.log('boton',e)
        console.table(event)
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
        <h3>home</h3>
        <br/>
        <ButtonGroup>
            <Button name='info' variant="outlined" color="primary" onClick={e=>handleMensaje('info',e)}>Mensage 1</Button>
            <Button name='error' variant='contained' color="secondary" onClick={()=>handleMensaje('error')}>Mensage 2</Button>
            <Button name='warning' color="inherit" onClick={()=>handleMensaje('warning')}>Mensage 3</Button>
            <Button name='success' onClick={()=>handleMensaje('success')}>Mensage 4</Button>
        </ButtonGroup>
    </div>);
}
