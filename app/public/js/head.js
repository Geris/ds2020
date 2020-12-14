class Head extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>App Viajes ${
              this.getAttribute("ruta") ? "| " + this.getAttribute("ruta") : ""
            }</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        </head>
    `;
  }
}

window.customElements.define("ui-head", Head);
