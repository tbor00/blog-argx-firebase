let propiedades = {
  usuario: {},
  google: document.querySelector("#google"),
  logueo: false,
};

let getCamb = {
  signin: document.querySelector("#signina"),
  desloguear: document.querySelector("#signout"),
  nombre: document.querySelector("#name"),
  texto: document.querySelector("#texto"),
  cta: document.querySelector("#cta"),
  modal: document.querySelector("#signin"),
  cBlog: document.querySelector("#contenidoBLOG"),
  crearModal: document.querySelector("#crear"),
  namepost: document.querySelector("#namepost"),
  titulo: document.querySelector("#titulo"),
  msgPOST: document.querySelector("#msgPOST"),
  update: document.querySelector("#update"),
  mostrarc: document.querySelector("#header"),
  añadir: document.querySelector("#añadiradm"),
  emailAdm: document.querySelector("#nameadmin"),
  pwAdm: document.querySelector("#pwadmin"),
  agregaradmin: document.querySelector("#agregaradmin"),
};

function CloseModal() {
  $("#signin").modal("hide");
  $("#createPOST").modal("hide");
  $("#addadmin").modal("hide");
}
