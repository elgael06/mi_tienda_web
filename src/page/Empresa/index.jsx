import React, { useEffect } from 'react';
import { Button, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Add } from '@material-ui/icons';
import { select } from '../../services/conections';
import { useSelector, useDispatch } from 'react-redux';

const Empresa = ()=>{
    const { user,empresas_lista }     = useSelector(state=>state);
    const dispatch     = useDispatch();
    const history = useHistory();

    useEffect(() => {
        cargarEmpresar();
    }, []);

    const cargarEmpresar = async () => {
        const values = await select(user.id).empresas();
        console.warn(values);
        dispatch({
            type:'EMPRESA_LISTA',
            values
        })
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
        <div style={{maxHeight:450,overflow:'auto'}}>
            <Table >
                <TableHead >
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>FOTO</TableCell>
                        <TableCell>NOMBRE</TableCell>
                        <TableCell>NUMERO</TableCell>
                        <TableCell>DIRECCION</TableCell>
                        <TableCell>TELEFONO</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell style={{width:150}}>OPCIONES</TableCell>
                    </TableRow>  
                </TableHead>
                <TableBody>
                    {empresas_lista.map(e=><TableRow>
                        <TableCell>{e.id}</TableCell>
                        <TableCell><img height='45' src={e.foto} alt='foto' /> </TableCell>
                        <TableCell>{e.nombre}</TableCell>
                        <TableCell>{e.numero}</TableCell>
                        <TableCell>{e.direccion}</TableCell>
                        <TableCell>{e.telefono}</TableCell>
                        <TableCell>{e.email}</TableCell>
                        <TableCell>
                            <Button variant='contained' onClick={()=>history.push(`/Empresa/${e.id}`)} color='primary'>Editar</Button>
                            <Button variant='text' color='secondary'>Borrar</Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>
    </div>);
}



export default Empresa;