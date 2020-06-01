import React from 'react';
import home from "../page/home";
import { Home, Business, People, Info, EmojiPeople, BusinessCenterRounded } from "@material-ui/icons";
import Empresa from '../page/Empresa';
import AddEmpresa from '../page/Empresa/AddEmpresa';
import IdEmpresa from '../page/Empresa/IdEmpresa';

const rutas_accesos = [
    {
        url:'/Home',
        component:home,
        exact:true,
        icon:<Home />,
    },
    {
        url:'/Empresa',
        component:Empresa,
        exact:true,
        icon:<Business/>
    },
    {
        url:'/Empresa/Nueva',
        component:AddEmpresa,
        exact:true,
        icon:<BusinessCenterRounded />
    },
    {
        url:'/Empresa/:id',
        component:IdEmpresa,
        exact:true,
        icon:null
    },
    {
        url:'/Usuarios',
        component:()=><span>Usuarios</span>,
        exact:true,
        icon:<People />
    },
    {
        url:'/Usuarios/:id',
        component:()=><span>Usuario</span>,
        exact:true,
        icon:null
    },
    {
        url:'/Usuarios/Nuevo',
        component:()=><span> Nuevo Usuario</span>,
        exact:true,
        icon:<EmojiPeople />
    },
    {
        url:'/Acerca',
        component:()=><span>Acerca</span>,
        exact:true,
        icon:<Info />
    },
];

export default rutas_accesos;