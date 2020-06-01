import React from 'react';
import home from "../page/home";
import { Home, Business, People, Info, EmojiPeople, BusinessCenterRounded } from "@material-ui/icons";

const rutas_accesos = [
    {
        url:'/Home',
        component:home,
        exact:true,
        icon:<Home />,
    },
    {
        url:'/Empresas',
        component:()=><span>Empresas</span>,
        exact:true,
        icon:<Business/>
    },
    {
        url:'/Empresas/Nueva',
        component:()=><span>Nueva Empresa</span>,
        exact:true,
        icon:<BusinessCenterRounded />
    },
    {
        url:'/Empresas:id',
        component:()=><span>Empresa</span>,
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
        url:'/Usuarios:id',
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