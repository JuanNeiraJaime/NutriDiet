var tabla = document.getElementById("Datos");


let btncerrarsesion = document.getElementById("cerrarsesion")
btncerrarsesion.addEventListener("click", () => {
    window.localStorage.removeItem("token")
    location.assign("login.html")
}

)

function ConsultarP(){

    /* let nombre = document.getElementById("Nombretext").value;
    let apellido = document.getElementById("Apellidostext").value;
    let telefono = document.getElementById("Telefonotext").value;
    let edad = document.getElementById("Edadtext").value;
    let sexo = document.getElementById("Sexotext").value;
    let alergia = document.getElementById("Alergiatext").value;
 */
    fetch('http://localhost:3000/pacientes')
    .then(resp => resp.json())
    .then(res => {
  
    for (var i = 0; i < res.length; i++) { 

        var fila = tabla.insertRow();

        var a = document.createElement("button");
        a.innerHTML = "Borrar";
       
    
         fila.insertCell(0).innerHTML   = res[i].id_pac;
         fila.insertCell(1).innerHTML = res[i].Nombres;
         fila.insertCell(2).innerHTML = res[i].Apellidos;
         fila.insertCell(3).innerHTML = res[i].Telefono;
         fila.insertCell(4).innerHTML = res[i].Edad;
         fila.insertCell(5).innerHTML = res[i].Sexo;
         fila.insertCell(6).innerHTML = res[i].Alergia;
         fila.insertCell(7).appendChild(a);
       
         a.onclick = function() {
            console.log(fila)
            Borrar()
        }
    }

    });

    //.catch(err => console.error(err));
    
}

function Borrar(idpac){

    fetch('http://localhost:3000/pacientes/' + idpac, {
        method: 'DELETE',
        headers:{ "content-Type": "application/JSON",
        Autorization: "Bearer" + window.localStorage.getItem("token") 
    },
  })
  .then(res => res.json())
  .then(res=> {
        alert("Paciente elimnado Correctamente");
  });     

}


function RegistrarP(){

    let nombre = document.getElementById("Nombretext").value;
    let apellido = document.getElementById("Apellidotext").value;
    let telefono = document.getElementById("Telefonotext").value;
    let edad = document.getElementById("Edadtext").value;
    let intedad = parseInt(edad, 10);
    let sexo = document.getElementById("Sexotext").value;
    let alergia = document.getElementById("Alergiatext").value;
    

    fetch('http://localhost:3000/pacientes', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Autorization: "Bearer" + window.localStorage.getItem("token")
    },
    body: JSON.stringify({ Nombres: nombre, Apellidos: apellido , Telefono: telefono , Edad: intedad , Sexo: sexo, Alergia: alergia })
    })
    .then(res => res.json())
    .then(res=> {
    console.log(res);
});
}