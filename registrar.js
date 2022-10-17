function Registrar() {
  let usuario = document.getElementById("User");
  let password = document.getElementById("pass");

  fetch("https://nutridiet6.herokuapp.com/signup", {
    method: "POST",
    body: JSON.stringify({
      email: usuario.value,
      password: password.value,
    }),
    headers: { "content-Type": "application/JSON" },
  })
    .then((res) => {
      if (res.status) {
        alert("Registrado");
      } else {
        alert("Error");
      }
    })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}
