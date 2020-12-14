class Link extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <a class="nav-link text-white text-decoration-none" href="${this.getAttribute(
      "href"
    )}">
      ${this.getAttribute("texto")}
    </a>
    `;
  }
}

window.customElements.define("ui-link", Link);

class Navbar extends HTMLElement {
  constructor() {
    super();
    const links = [
      { href: "/crearViaje", texto: "Crear Viaje" },
      { href: "/verViajes", texto: "Ver Viajes" },
      { href: "/perfil", texto: "Ver Perfil" },
    ];
    let htmlLinks = "";

    links.forEach((link) => {
      htmlLinks +=
        "<ui-link href=" + link.href + " texto='" + link.texto + "'></ui-link>";
    });

    this.innerHTML = `
    <nav class="navbar navbar-expand-sm bg-primary bg-gradient ">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="/">${this.getAttribute(
          "titulo"
        )}</a> |
        <div class="collapse navbar-collapse" >
          <div class="navbar-nav text-white">
            ${htmlLinks}
            <span class="navbar-text">
              ${this.getAttribute("nombre")}
            </span>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}

window.customElements.define("ui-navbar", Navbar);
