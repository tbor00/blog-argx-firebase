let eventos = {
  loguinGoogle: function () {
    propiedades.google.addEventListener("click", metodos.Loguear);
  },
  Desloguear: function () {
    getCamb.desloguear.addEventListener("click", metodos.Desloguear);
  },
};

let metodos = {
  Loguear: function (e) {
    e.preventDefault;
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        propiedades.usuario = result;
        metodos.datosUser(propiedades.usuario);
        CloseModal();
      })
      .catch((error) => console.log(error.message));
  },

  Desloguear: function (e) {
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  },

  Logueadin: function () {
    document.addEventListener("DOMContentLoaded", () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          propiedades.usuario.user = user;
          metodos.datosUser(propiedades.usuario);
        }
      });
    });
  },

  datosUser: function (datos) {
    propiedades.usuario.nombre = datos.user.displayName;
    getCamb.nombre.style.display = "block";
    getCamb.nombre.innerHTML = propiedades.usuario.nombre;
    propiedades.logueo = true;
    getCamb.desloguear.style.display = "block";
    getCamb.signin.style.display = "none";
    getCamb.texto.innerHTML = `Bienvenido/a ${propiedades.usuario.nombre}, Ya te logueaste!`;
    getCamb.cta.style.display = "none";
    getCamb.cBlog.style.display = "block";
    if (datos.user.displayName == null) {
      getCamb.texto.innerHTML = `Bienvenido/a Administrador, Ya te logueaste!`;
      getCamb.nombre.innerHTML = "Administrador";
      getCamb.cBlog.style.display = "block";
      getCamb.crearModal.style.display = "block";
    }
  },
};

eventos.loguinGoogle();
eventos.Desloguear();
metodos.Logueadin();
