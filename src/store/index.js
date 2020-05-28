import { createStore, combineReducers } from "redux";


export const initialStore = {
    user : {
        id      : null,
        name    : '',
        email   : '',
        photo   : ''
    },
    data:{
        access:[],
        tocken:''
    }
};

const user = (state= initialStore.user,actions) => {
    switch (actions.type) {
        case 'ADD_USER':
            return actions.user;
        case 'REMOVE_USER':
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

