import React, { useState, Fragment } from 'react';
import { Button, LinearProgress, Backdrop, Snackbar } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import TopAppBar from '../TpoAppBar';
import DrawerLayout from '../DrawerLayout';


export default function Layout({children}){
    const [toggleDrawer, settoggleDrawer] = useState(false);
    const { loading,snackBar } = useSelector(state => state);
    const dispatch = useDispatch(); 

    return(<Fragment>   

        <Backdrop open={loading}>
                <LinearProgress style={{width:'30%',minWidth:250}} />
        </Backdrop>
        <TopAppBar
            onClick={()=>settoggleDrawer(true)}
        />
        <DrawerLayout
            settoggleDrawer={settoggleDrawer}
            toggleDrawer={toggleDrawer}
        />
        <main>{children}</main>
        <Snackbar 
            open={snackBar.show} 
            autoHideDuration={5000} 
            message={snackBar.message}
            severity={snackBar.severity}
            action={
                snackBar.actionsText 
                ? <Button onClick={()=>dispatch({type:'CLOSE_ACTION'})} color="secondary">{snackBar.actionsText}</Button>
                : null}
            onClose={()=>dispatch({type:'CLOSE_ACTION'})}
        />
    </Fragment>);
}


