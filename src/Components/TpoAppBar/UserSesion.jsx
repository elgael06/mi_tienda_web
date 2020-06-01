import React,{ useState } from 'react'
import { Button, Avatar, Popover, List, ListItem, ListItemText, Divider, ListItemIcon } from '@material-ui/core';
import { SettingsPower } from '@material-ui/icons';


const UserSesion = ({usuario,onClose}) =>{
    const [open,setopen] = useState(false);
   return (<Button 
        style={{
            position:'fixed',
            right:5,
            float:'right'
        }} color="inherit"
        onClick={()=>{setopen(!open)}}
        >
            
        <Avatar src={usuario.photo} alt={usuario.email}  />
        <Popover
            open={open}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',        
        }}>
            <List>   
                <ListItem>             
                    <ListItemText primary={usuario.name} secondary={usuario.email} />
                </ListItem>
                    <Divider />
                    <ListItem  button onClick={onClose} >
                    <ListItemIcon >
                        <SettingsPower />
                    </ListItemIcon>
                    <ListItemText primary='Salir'/>
                </ListItem>
            </List>
        </Popover>
    </Button>);
}

export default UserSesion;