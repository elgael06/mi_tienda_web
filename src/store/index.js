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
    }
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

const reducers = combineReducers({
    user,
    data,
    loading,
    snackBar
});

export default createStore(reducers,initialStore);

