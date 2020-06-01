import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardContent, TextField, Button } from '@material-ui/core';
import { ImageOutlined } from '@material-ui/icons';

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

export const FormEmpresa = () => {
    const [foto,setfoto] =useState('')

    return(<div className='form-empresa' style={{textAlign:'left',padding:'0 30px'}}>
        <h4>Datos de La Empresa</h4>
        <TextField

            label='Nombre'
            variant='outlined'
            style={{marginRight:30,width:320}}
        />
        <TextField
            label='Telefono'
            type='phone'
            variant='outlined'
            InputProps={{
                step:10
            }}
            style={{marginRight:30,width:188}}
        />
        <Button style={{
                height:56,
                marginTop:10,
                width:139
            }}
            color='secondary'
            variant="outlined"
            onClick={()=>setfoto('https://comunidad.iebschool.com/iebs/files/2015/04/employer-branding.png')}
        >
            {foto ? <img alt='foto Empresa'height='46' src={foto} />
            : 'foto Empresa'}
        </Button>

        <TextField
            label='direccion'
            variant='outlined'
            style={{marginRight:30,width:320}}
        />  
        <TextField
            label='# Numero'
            type='number'
            variant='outlined'
            InputProps={{
                step:10
            }}
            style={{marginRight:30,width:188}}
        />
        <Button 
            color='primary' 
            style={{
                height:56,
                marginTop:10,
                width:139
            }}
            variant='contained'>
            Guardar
        </Button>
    </div>);
}

export default AddEmpresa;
