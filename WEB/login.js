function Log() {
    let usuario = document.getElementById("User").value;
    let password = document.getElementById("pass").value;

    fetch('http://localhost:3000/users/login', {
      method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: usuario, password: password })
    })
    .then(res => res.json())
    .then(res=> {
    console.log(res);
    })
    .catch(e => console.log(e))
}
