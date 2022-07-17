const d = document;
let usuarios = ["pedro@hotmail.com", "lautaro@gmail.com","admin"]
let paswrd = ["1234","4567","admin"]
let padre = d.getElementById("padre")



function preLogin(){
    let user = document.querySelector("#usuario").value;
    let pasw = document.querySelector("#contraseña").value;
    alert(user)
    login(user, pasw)
}

function login(user, pasw){
    
    checkPasw = paswrd.indexOf(pasw)//-1 cuando no esta en el array
    checkUser = usuarios.indexOf(user)
    
    if (user.length <= 0 || pasw.length <= 0){
        let vacio = d.getElementById("vacio")
        incorrecto.style.display="none"
        vacio.innerHTML = "<p>Error, Digite algun usuario o contraseña</p>"
        vacio.style.color = "black"
        vacio.style.display = "block"
    
    }
    else if (checkUser == -1 || checkPasw == -1){
        let incorrecto = d.getElementById("incorrecto");
        vacio.style.display="none"
        
        incorrecto.innerHTML = "<p>Error, usuario o contraseña incorrecta</p>";
        incorrecto.style.color = "red";
        incorrecto.style.display="block"
        
    }
    else{
        vacio.style.display = "none"
        incorrecto.style.display = "none"
        success = d.getElementById("success")
        success.innerHTML = ("<p>INICIANDO SESION</p>")
        success.style.color = "blue"
    }
    if (user == "admin"){
        paswAdmin = prompt("Digite su constraseña de administrador")
        if (paswAdmin == "44475567"){
            alert("INGRESANDO AL ADMINISTRADOR")

        }
        else{
            alert("buen intento pa")
        }
    }
}

function changePasw(){
    let userRegister = d.querySelector("#usuarioRegister").value;
    let paswRegister = d.querySelector("#paswRegister").value;
    if (userRegister == NaN){
        alert("FATAL ERROR")
    }
    usuarios.push(userRegister);
    paswrd.push(paswRegister);
    let check = d.getElementById("registrado");
    check.innerHTML = "<p>Usuario registrado con exito</p>";
    check.style.color = "blue";
}