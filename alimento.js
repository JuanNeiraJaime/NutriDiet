let nom = document.getElementById("nombre")
let tipo = document.getElementById("tipo")
var tabla = document.getElementById("contenedor")

function consultar(){
    fetch('http://localhost:3000/alimentos')
    .then(resp => resp.json())
    .then(res => {

        for(var x = 0; x < res.length; x++){
            var fila = tabla.insertRow() 
            var a = document.createElement("button")
            a.innerHTML = "Borrar"
            a.value = res[x].idalimento
            a.onclick = borrar

            fila.insertCell(0).innerHTML = res[x].idalimento
            fila.insertCell(1).innerHTML = res[x].nombre
            fila.insertCell(2).innerHTML = res[x].tipo
            fila.insertCell(3).appendChild(a);
        }  

    })
    //.catch(err => console.error(err))
}

function registrar(){
    fetch('http://localhost:3000/alimentos',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre: nom.value, tipo: tipo.value
        })
    })
    .then(resp => resp.json())
    .then(res => {
        console.log(res)
    })
}

function borrar(e){
    fetch('http://localhost:3000/alimentos/'+ e.target.value,{
        method: 'DELETE',
    })
    .then(resp => resp.json())
    
    console.log(e.target.value)
}



