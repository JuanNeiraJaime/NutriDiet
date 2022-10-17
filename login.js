let usuario = document.getElementById("User");
let password = document.getElementById("pass");
let ingresar = document.getElementById("ingresar");

ingresar.addEventListener("click", () => {
  fetch("https://nutridiet6.herokuapp.com/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: usuario.value,
      password: password.value,
    }),
    headers: { "content-Type": "application/JSON" },
  })
    .then((res) => {
      if (res.status == 200) {
        location.assign("paciente.html");
      }
      return res.json();
    })
    .then((res) => {
      window.localStorage.setItem("token", res.token);
    })
    .catch((err) => console.log(err));
});
