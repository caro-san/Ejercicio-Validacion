function validarFormulario(){
    
    var txtUsuario = document.getElementById('usuario').value;
    var txtClave = document.getElementById('clave').value;



    //Test correo
    if(!(/@/.test(txtUsuario))){
        alert('ERROR: Su usuario no debe estar vacio y debe incluir el simbolo @');
        return false;
    }

     //Test campo obligatorio
    if(txtClave == null || txtClave.length == 0 || /^\s+$/.test(txtClave)){
        alert('ERROR: El campo clave no debe ir vacío o lleno de solamente espacios en blanco');
        return false;
    }
    
    return true;
}