var tabla = document.getElementById("Datos");


let btncerrarsesion = document.getElementById("cerrarsesion")
btncerrarsesion.addEventListener("click", () => {
    window.localStorage.removeItem("token")
    location.assign("login.html")
}

)

function ConsultarP(){

    fetch('https://nutridiet6.herokuapp.com/pacientes')
    .then(resp => resp.json())
    .then(res => {
  
    for (var i = 0; i < res.length; i++) { 

        var fila = tabla.insertRow();
/* 
        var a = document.createElement("button");
        a.innerHTML = "Borrar"; */
       
    
         fila.insertCell(0).innerHTML   = res[i].id_pac;
         fila.insertCell(1).innerHTML = res[i].Nombres;
         fila.insertCell(2).innerHTML = res[i].Apellidos;
         fila.insertCell(3).innerHTML = res[i].Telefono;
         fila.insertCell(4).innerHTML = res[i].Edad;
         fila.insertCell(5).innerHTML = res[i].Sexo;
         fila.insertCell(6).innerHTML = res[i].Alergia;
        // fila.insertCell(7).appendChild(a);
       
        /*  a.onclick = function() {
            console.log(fila); 
        } */

    }
    

    });

    //.catch(err => console.error(err));
    
}

function Borrar(){

    let borrar = document.getElementById('IDe').value;

    fetch('https://nutridiet6.herokuapp.com/pacientes/' + borrar, {
        method: 'DELETE',
        headers:{ "content-Type": "application/JSON",
        Autorization: "Bearer" + window.localStorage.getItem("token") 
    },
    })
    .then(res => {
    if(res.status==204) {
        alert("Paciente Eliminado Correctamente")
    }else{
        alert("error al eliminar el paciente")
    }
    })
}

function EditarP() {
    let id = document.getElementById("ID").value;
    let nombre = document.getElementById("NombretextE").value;
    let apellido = document.getElementById("ApellidotextE").value;
    let telefono = document.getElementById("TelefonotextE").value;
    let edad = document.getElementById("EdadtextE").value;
    let intedad = parseInt(edad, 10);
    let sexo = document.getElementById("SexotextE").value;
    let alergia = document.getElementById("AlergiatextE").value;

    fetch('https://nutridiet6.herokuapp.com/pacientes/' + id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ Nombres: nombre, Apellidos: apellido , Telefono: telefono , Edad: intedad , Sexo: sexo, Alergia: alergia })
         })
        .then(res => {
            if(res.status==204) {
                alert("editado")
            }else{
                alert("error editado")
            }
        })
        .then(res=> {
        console.log(res);
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
    

    fetch('https://nutridiet6.herokuapp.com/pacientes', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Autorization: "Bearer" + window.localStorage.getItem("token")
    },
    body: JSON.stringify({ Nombres: nombre, Apellidos: apellido , Telefono: telefono , Edad: intedad , Sexo: sexo, Alergia: alergia })
    })
    .then(res => {
        if(res.status==200) {
            alert("Registro Exitoso..")
        }else{
            alert("error al registrar")
        }
    })
    .then(res=> {
    console.log(res);
});
}