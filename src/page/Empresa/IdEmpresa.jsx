import React, { useEffect, useState }  from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { select } from '../../services/conections';
import { useDispatch, useSelector } from 'react-redux';
import { FormEmpresa } from './AddEmpresa';

const IdEmpresa = () =>{
    const dispatch              = useDispatch(); 
    const {empresaSelect, user} = useSelector(state=>state);
    const { id }                = useParams();

    useEffect(()=>{
        cargarEmpresa()
    },[]);
    const cargarEmpresa = async () =>{
        const value = await select().empresa_id(id);
        await dispatch({type:'EMPRESA_EDITAR',value});
    }

    return id!='Nueva' ? (<center>
        <Card elevation={5} variant='elevation' style={{maxWidth:900,minHeight:400}}>
            <CardHeader title={`ID Empresa: ${empresaSelect.id}.`} />
            <CardContent>
                <FormEmpresa idEmpresa={id} />
            </CardContent>
        </Card>
    </center>) : null;
}

export default IdEmpresa;

