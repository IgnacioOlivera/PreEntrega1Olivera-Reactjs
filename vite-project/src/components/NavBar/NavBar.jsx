import CardWidget from "../CartWidget/CardWidget"

function NavBar() { 
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Whiskeria</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Cocktail</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Whiskies</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            mas productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">bebidas blancas</a></li>
            <li><a class="dropdown-item" href="#">Acompañamientos</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Promociones</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Contacto</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <CardWidget class="X" />
      </form>
    </div>
  </div>
</nav>
    )
}

export default NavBar