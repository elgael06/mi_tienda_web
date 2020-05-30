import { createStore, combineReducers } from "redux";



export const initialStore = {
    user : localStorage.sesion_app ? JSON.parse(localStorage.sesion_app) : {
        id      : null,
        name    : '',
        email   : '',
        photo   : '',
        googleUser : false,
        credential:null
    },
    data:{
        access:[],
        tocken:''
    }
};

const user = (state= initialStore.user,actions) => {
    switch (actions.type) {
        case 'ADD_USER':
            localStorage.setItem('sesion_app',JSON.stringify(actions.user));
            return actions.user;
        case 'REMOVE_USER':
            localStorage.removeItem('sesion_app');
            return initialStore.user;
        default:
            return state;
    }
};

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
    data
});

export default createStore(reducers,initialStore);

