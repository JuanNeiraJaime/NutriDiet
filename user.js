let usr = document.getElementById("usuario")
let nom = document.getElementById("nombre")
let contraseña = document.getElementById("contraseña")
var tabla = document.getElementById("contenedor")

function consultar(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(res => {

        for(var x = 0; x < res.length; x++){
            var fila = tabla.insertRow() 
            var a = document.createElement("button")
            a.innerHTML = "Borrar"
            a.value = res[x].idalimento
            a.onclick = borrar

            fila.insertCell(0).innerHTML = res[x].nomUsuario
            fila.insertCell(1).innerHTML = res[x].NombreCompl
            fila.insertCell(2).innerHTML = res[x].contraseña
            fila.insertCell(3).appendChild(a);
        }  

    })
    //.catch(err => console.error(err))
}

function registrar(){
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomUsuario: usr.value, NombreCompl: nom.value, contrasena: contraseña.value
        })
    })
    .then(resp => resp.json())
    .then(res => {
        console.log(res)
    })
}

function borrar(e){
    fetch('http://localhost:3000/users/'+ e.target.value,{
        method: 'DELETE',
    })
    .then(resp => resp.json())
    
    console.log(e.target.value)
}



