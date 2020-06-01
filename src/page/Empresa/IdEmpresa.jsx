import React  from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const IdEmpresa = () =>{
    const { id } = useParams();
    let paraneter = parseInt(id)|| '';;

    console.log(Number.isInteger(paraneter),paraneter)

    return Number.isInteger(paraneter) ? (<center>
        <Card elevation={5} variant='elevation' style={{maxWidth:900,minHeight:400}}>
            <CardHeader title={`Empresa: ${paraneter}.`} />
            <CardContent>
                Contenido
            </CardContent>
        </Card>
    </center>) : null;
}

export default IdEmpresa;

