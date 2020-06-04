import { createStore, combineReducers } from "redux";

const defaultUser = {
    id          : null,
    name        : '',
    email       : '',
    photo       : '',
    googleUser  : false,
    credential  : null
};


export const initialStore = {
    user : localStorage.sesion_app ? JSON.parse(localStorage.sesion_app) : defaultUser,
    data:{
        access:[],
        tocken:''
    },
    loading:false,
    snackBar:{
        show:false,
        message:'',
        severity:'info',
        actionsText:''
    },
    empresa :{
        id          : null,
        nombre 		: '',
        telefono 	: '',
        foto		: '',
        direccion	: '',
        numero		: '',
    },
    empresas_lista:[],
};

const user = (state= initialStore.user,actions) => {
    switch (actions.type) {
        case 'ADD_USER':
            localStorage.setItem('sesion_app',JSON.stringify(actions.user));
            return actions.user;
        case 'REMOVE_USER':
            localStorage.removeItem('sesion_app');
            return defaultUser;
        default:
            return state;
    }
};

const loading = (state=false,actions)=>{
    switch (actions.type) {
        case 'LOADING':
            return true;
        case 'DONE':
            return false;    
        default:
            return state;
    }
}

const snackBar = (state=initialStore.snackBar,actions)=>{
    switch(actions.type){
        case 'SHOW_ACTION':
            return actions.mesaje;
        case 'CLOSE_ACTION':
            return initialStore.snackBar;
        default: 
        return state;
    }   
}

const data = (state= initialStore.data,actions) => {
    switch (actions.type) {
        case 'ADD_DATA':
            return actions.data;
        case 'REMOVE_DATA':
            return initialStore.data;
        default:
            return state;
    }
};

const empresaSelect = (state = initialStore.empresa ,actions) =>{
    switch (actions.type) {
        case 'EMPRESA_ID'     : return {...state, id : actions.value};
        case 'EMPRESA_NOMBRE' : return {...state, nombre : actions.value};   
        case 'EMPRESA_TEL'    : return {...state, telefono : actions.value};   
        case 'EMPRESA_FOTO'   : return {...state, foto : actions.value};   
        case 'EMPRESA_DIR'    : return {...state, direccion : actions.value};   
        case 'EMPRESA_NUM'    : return {...state, numero : actions.value};    
        case 'EMPRESA_DEFAULT': return {
                id          : null,
                name        : '',
                email       : '',
                photo       : '',
                googleUser  : false,
                credential  : null
        };       
        default               : return state;
    }
}

const empresas_lista = (state = initialStore.empresas_lista,actions) =>{
    switch (actions.type) {
        case 'EMPRESA_LISTA': return actions.values;    
        default:
            return state;
    }
}

const reducers = combineReducers({
    user,
    data,
    loading,
    snackBar,
    empresaSelect
});

export default createStore(reducers,initialStore);

