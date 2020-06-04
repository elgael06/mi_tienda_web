import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import UsuarioGoogle from "../models/usuarioGoogle";

const firebaseConfig ={
  apiKey            : "AIzaSyBl4RoPkOCb-WI8_NlnGvWCe0zRjXXwR_8",
  authDomain        : "mi-tienda-web.firebaseapp.com",
  databaseURL       : "https://mi-tienda-web.firebaseio.com",
  projectId         : "mi-tienda-web",
  storageBucket     : "mi-tienda-web.appspot.com",
  messagingSenderId : "526687941999",
  appId             : "1:526687941999:web:293b3085ab0c4d84ac649a",
  measurementId     : "G-ZW8GPJKR34"
  };

firebase.initializeApp(firebaseConfig);

export const inicioSesionGoogle = async () =>{		
	const res = new UsuarioGoogle();

  	try{
		let provider  = new firebase.auth.GoogleAuthProvider();
		let usuario   = await firebase.auth().signInWithPopup(provider);

		if(usuario){
			const {user, credential} = usuario;	
			res.get({
				uid         :user.uid,
				displayName :user.displayName,
				email       :user.email,
				foto        :user.photoURL,
				credential
			});
    	}
	} catch(error) {
		console.error('error',error);
		return res;
	}

	return res;
}
export const cerrarSesionGogle = async ()=>{
    await firebase.auth().signOut()
}


export default firebase;