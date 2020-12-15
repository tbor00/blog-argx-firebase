//POSTS
const PostList = document.querySelector("#posts");

let upPost = function (data) {
  let html = "";
  data.forEach((doc) => {
    const post = doc.data();
    const li = `
              <li class="list-group-item list-group-item-action m-4">
              <h5>Titulo: ${post.Titulo}</h5>
              <h6>Por: ${post.Nombre}</h6>
              <p>${post.Descripcion}</p>
              </li>
              `;

    html += li;
  });
  PostList.innerHTML = html;
};

//Eventos

auth.onAuthStateChanged((user) => {
  if (user) {
    getCamb.mostrarc.style.height = "500px";
    fs.collection("posts")
      .get()
      .then((snapshot) => {
        upPost(snapshot.docs);
      });
    if (user.displayName == null) {
      getCamb.agregaradmin.style.display = "block";
      getCamb.update.addEventListener("click", function (e) {
        e.preventDefault();
        fs.collection("posts")
          .add({
            Titulo: getCamb.titulo.value,
            Nombre: getCamb.namepost.value,
            Descripcion: getCamb.msgPOST.value,
          })
          .then(function (docRef) {
            Swal.fire({
              icon: "success",
              title: "Posteo enviado con éxito",
              text: "En unos segundos se recargara y lo podrás ver!",
            });
          })
          .catch(function (error) {
            Swal.fire({
              icon: "Error",
              title: "Tu Posteo no se pudo enviar",
              text: "Ups, hubo un error y tu posteo no se pudo enviar!",
            });
          });
        setTimeout(function () {
          location.reload();
        }, 3000);

        CloseModal();
      });
    }
  } else {
  }
});
