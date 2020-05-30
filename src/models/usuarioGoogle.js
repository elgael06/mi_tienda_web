export default class UsuarioGoogle {
    constructor(res){
        console.log(res);
        
        this.uid         = res.uid;
        this.displayName = res.displayName;
        this.email       = res.email;
        this.foto        = res.foto;
        this.credential  = res.credential;

    }
    uid         = '';
    displayName = '';
    email       = '';      
    foto        = '';  
    credential  = {};     
}