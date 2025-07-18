const baseDeClientes = JSON.parse(localStorage.getItem("baseDeClientes")) || []

function pedirDatos(){
    const userIngresado = prompt("Ingrese su email: ")
    const passwordIngresado = prompt("Ingrese su contraseña: ")
    return {userIngresado,passwordIngresado}
}

function verificarDatos(){
    pedirDatos()
    const { userIngresado, passwordIngresado } = pedirDatos()
    const cliente = baseDeClientes.find(cliente => cliente.email === userIngresado && cliente.password === passwordIngresado)

    if(cliente){
        alert("Inicando sesion...")
    }else{
        alert("Usuario o contraseña incorrectos")
    }
}

verificarDatos()