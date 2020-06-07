import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardContent, TextField, Button, CircularProgress } from '@material-ui/core';
import { insert, update } from '../../services/conections';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddEmpresa = () =>{

    return(<center>
        <Card elevation={5} variant='elevation' style={{maxWidth:900,minHeight:400}}>
            <CardHeader title='Nueva Empresa.' />
            <CardContent>
                <FormEmpresa />
            </CardContent>
        </Card>
    </center>)
}

export const FormEmpresa = ({idEmpresa='Nuevo'}) => {
    const dispatch = useDispatch(); 
    const {empresaSelect, user} = useSelector(state=>state);
    const [disable,setdisable]  = useState(true);
    const [load,setload]        = useState(false);
    const history               = useHistory();

    const checarValor = () =>{
        let index = 0;

        for(let dato in empresaSelect){
            index +=  empresaSelect[dato]!=='' ? 1 : 0; 
        }
        console.log('disable',index<6,index);
        setdisable(index<6);
    }

    const saveResponse = async data => await idEmpresa=='Nuevo' ? insert().empresa(data) : update().empresa(data);

    const enviarDatos = async () =>{
        setload(true)
        let val = {
            ...empresaSelect,
            email : user.email,
            uid	  : user.id,	
        }
        saveResponse(val)
        .then(e=>dispatch({
            type:'SHOW_ACTION',
            mesaje:{
                show:true,
                message:`Empresa Guardada con id = ${e}.`,
                severity:'success',
                actionsText:'cerrar'
            }
        }))

        dispatch({type:'EMPRESA_DEFAULT'});
        setload(false);
        setdisable(false);
        history.push('/Empresa');
    }

    const handleNombre = e => dispatch({type:e.target.name,value:e.target.value});
    const handleImage = () => dispatch({type:'EMPRESA_FOTO',value:'https://comunidad.iebschool.com/iebs/files/2015/04/employer-branding.png'});

    return(<div className='form-empresa' style={{textAlign:'left',padding:'0 30px'}}>
        <h4>Datos de La Empresa</h4>
        <TextField
            name     = 'EMPRESA_NOMBRE'
            onChange = {handleNombre}
            onBlur   = {checarValor}
            value    = {empresaSelect.nombre}
            label    = 'Nombre'
            variant  = 'outlined'
            style    = {{marginRight:30,width:320}}
        />
        <TextField
            name     = 'EMPRESA_TEL'
            onChange = {handleNombre}
            value    = {empresaSelect.telefono}
            onBlur   = {checarValor}
            label    = 'Telefono'
            type     = 'phone'
            variant  = 'outlined'
            style    = {{marginRight:30,width:188}}
        />
        <Button style   = {{
                height    : 56,
                marginTop : 10,
                width     : 139
            }}
            color   = 'secondary'
            variant = "outlined"
            onClick = {handleImage}
        >
            {empresaSelect.foto ? <img alt='foto Empresa'height='46' src={empresaSelect.foto} /> : 'foto Empresa'}
        </Button>

        <TextField
            name     = 'EMPRESA_DIR'
            onChange = {handleNombre}
            onBlur   = {checarValor}
            value    = {empresaSelect.direccion}
            label    = 'direccion'
            variant  = 'outlined'
            style    = {{marginRight:30,width:320}}
        />  
        <TextField
            name     = 'EMPRESA_NUM'
            onChange = {handleNombre}
            onBlur   = {checarValor}
            value    = {empresaSelect.numero}
            label    = '# Numero'
            type     = 'number'
            variant  = 'outlined'
            style    = {{marginRight:30,width:188}}
        />
        {load ? <CircularProgress /> : <Button 
            color   = 'primary' 
            style   = {{
                height    : 56,
                marginTop : 10,
                width     : 139
            }}
            disabled={disable}            
            onClick  = {enviarDatos}
            variant  ='contained'>
            Guardar
        </Button> }
    </div>);
}

export default AddEmpresa;
