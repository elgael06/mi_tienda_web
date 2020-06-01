import React from 'react';
import { Button, Table, TableHead, TableCell, TableRow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Add } from '@material-ui/icons';

const Empresa = ()=>{
    const history = useHistory();


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