usuario = document.querySelector("#user");
password = document.querySelector("#pw");
ingreso = document.querySelector("#ingresoadmin");

let administradores = {
  admin: {},
};

ingreso.addEventListener("click", function (event) {
  event.preventDefault();
  auth
    .signInWithEmailAndPassword(usuario.value, password.value)
    .then((Credenciales) => {
      CloseModal();
      administradores.admin = Credenciales;
      admin(administradores.admin);
    })
    .catch((error) => {
      console.log(error);
    });
});

getCamb.añadir.addEventListener("click", function (e) {
  e.preventDefault();

  auth
    .createUserWithEmailAndPassword(getCamb.emailAdm.value, getCamb.pwAdm.value)
    .then((user) => {
      Swal.fire({
        icon: "success",
        title: "Administrador agregado",
      });
      CloseModal();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title:
          "Ocurrió un problema y este administrador no puede ser agregado!",
      });
      CloseModal();
    });
});
