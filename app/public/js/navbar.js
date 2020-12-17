class Link extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <a 
      class="nav-link text-white text-decoration-none text-capitalize"
      href="${this.getAttribute("href")}"
    >
      ${this.getAttribute("texto")}
    </a>
    `;
  }
}

window.customElements.define("ui-link", Link);

class Navbar extends HTMLElement {
  links = [
    { href: "/crearViaje", texto: "Crear Viaje" },
    { href: "/verViajes", texto: "Ver Viajes" },
  ];

  constructor() {
    super();
    this.innerHTML = `
    <nav class="navbar navbar-expand-sm bg-primary bg-gradient ">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="/">
        <i class="fa fa-car"
          aria-hidden="true"
          style="
          font-size: 30px;
          vertical-align: middle;
      "></i> ${this.getAttribute("titulo")}&nbsp;&nbsp;|
        </a>
        <div class="collapse navbar-collapse d-flex justify-content-between">
          <div class="navbar-nav">
            ${this.getLinks()}
          </div>
          <div class="navbar-nav">
            <a href="/perfil" class="nav-link text-white text-decoration-none text-capitalize">
              ${this.getNombreUsuario()}&nbsp;
              <i class="fa fa-user-circle" 
                aria-hidden="true" 
                style="
                  font-size: 30px;
                  vertical-align: middle;
                "></i>
            </a>
          </div>
        </div>
        </div>
      </div>
    </nav>
    `;
  }

  getNombreUsuario() {
    /*return JSON.parse(
      localStorage.getItem("usuarioLogueado")
    ).nombre.toLowerCase();*/
    return "Florencia Fried"
  }

  getLinks() {
    let html = "";
    this.links.forEach((link) => {
      html +=
        "<ui-link href=" +
        link.href +
        " texto='" +
        link.texto.toLowerCase() +
        "'></ui-link>";
    });

    return html;
  }
}

window.customElements.define("ui-navbar", Navbar);
