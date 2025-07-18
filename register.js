const baseDeClientes = []
const caracteresEspeciales = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '_', '+', '-', '=', '[', ']', '{', '}', '|', ';',
  ':', "'", '"', ',', '.', '<', '>', '?', '/', '`',
  '~', '¡', '¿', '¬', '©', '®', '±', '§', '¶', 'µ'
]

function validacion (nombre,edad,email,password){
    if (!nombre || !edad || !email || !password){
        alert("Todos los campos son obligatorios")
        return false
    }

    if(!email.includes("@") || !email.includes(".com")){
        alert ("Tienes que ingresar un email valido")
        return false
    }

    if (typeof edad !== "number" || edad < 18){
        alert("Tenes que se mayor de 18 años")
        return false
    }

    const clienteExistente = baseDeClientes.find(cliente => cliente.email === email)

    if (clienteExistente){
        alert("Ya existe un cliente con ese email")
        return false
    }

    if (nombre.lenght < 8){
        alert("El nombre debe contener al menos 8 caracteres")
        return false
    }

    if(email.lenght < 6){
        alert("El email debe contener al menos 6 caracteres")
        return false
    }

    if(password.lenght < 8){
        alert("La contraseña debe contener al menos 8 caracteres")
        return false
    }

    if(!caracteresEspeciales.some(caract => password.includes(caract))){
        alert("La contrasseña debe contener caracteres especiales(!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~¡¿)")
        return false
    }
    
    return true
}

function registrarCliente(){
    const nombre = prompt("Ingrese su nombre:")
    const edadStr = prompt("Ingrese su edad:")
    const edad = Number(edadStr)
    const email = prompt("Ingrese su email:")
    const password = prompt("Ingrese su contraseña:")

    if(validacion){
        baseDeClientes.push(nombre,edad,email,password)
        alert("Registro exitoso,redireccionando...")
    }
}

registrarCliente()
