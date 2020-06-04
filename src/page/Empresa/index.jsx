import React, { useEffect } from 'react';
import { Button, Table, TableHead, TableCell, TableRow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Add } from '@material-ui/icons';
import { select } from '../../services/conections';
import { useSelector, useDispatch } from 'react-redux';

const Empresa = ()=>{
    const { user }     = useSelector(state=>state);
    const dispatch     = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // select(user.id).empresas().then(values=>{
        //     console.log('====================================');
        //     console.log(values);
        //     console.log('====================================');
        //     dispatch({type:'EMPRESA_LISTA',values});
        // });
        cargarEmpresar();
    }, []);

    const cargarEmpresar = async () => {
        const datos = await select(user.id).empresas();
        console.warn(datos);
    }

    return(<div>
        <h2>Lista de  Empresas.</h2>
        <Button 
            color='primary' 
            variant='contained' 
            style={{float:'right',marginTop:-50}}
            onClick={()=>history.push('/Empresa/Nueva')}    
            startIcon={<Add />}
        >Nueva</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>NOMBRE</TableCell>
                    <TableCell style={{width:150}}>OPCIONES</TableCell>
                </TableRow>  
            </TableHead>
        </Table>
    </div>);
}

export default Empresa;