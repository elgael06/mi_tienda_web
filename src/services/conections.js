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
        // const lista_datos = EMPRESAS.where('uid',"==",id_usuario);
        // lista_datos.get().then(e=>{
        //     e.forEach(res=>console.log(res))
        //     console.log(e)
        // })
        // lista_datos.onSnapshot(e=>console.log(e))
        const querySnapt = await EMPRESAS.where('uid',"==",id_usuario).get();
        querySnapt.forEach(doc=>{
            lista.push(doc.data());
        });       
        return lista;
    },
    empresa_id(id){

    },
});

