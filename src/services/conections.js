import firebase from './firebase';

/**CONSTANTS */
const db = firebase.firestore();

const EMPRESAS 	= db.collection('empresas');
const EMPLEADOS = db.collection('empleados');
const ACCESOS	= db.collection('accesos');

export const insert = () => ({
	async empresa({
		nombre 		= '',
		telefono 	= '',
		foto		= '',
		direccion	= '',
		numero		= '',	
		email		= '',
		uid			= '',	
	}){
		const { id } = await EMPRESAS.add({
			nombre,
			telefono,
			foto,
			direccion,
			numero,	
			email,
			uid	
		});
		return id;
	}	
});

export const select = (id_usuario) => ({
    async empresas(){
        const lista =[];
        const querySnapt = await EMPRESAS.where('uid',"==",id_usuario).get();
        querySnapt.forEach(doc=>{
            lista.push({...doc.data(),id:doc.id});
        });       
        return lista;
    },
    async empresa_id(id){
		let value  = await EMPRESAS.doc(id).get();
		console.log({...value.data(),id:value.id});      
        return {...value.data(),id:value.id};
    },
});

export const update = () =>({
	async empresa(value){
		await EMPRESAS.doc(value.id).update(value);
		return value.id
	}
});