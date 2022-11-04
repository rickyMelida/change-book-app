import React from "react";

export const Navbar = () => {
  return (
    <>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  id="home-item"
                  href=""
                  >Home</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Libros
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      id="highlighted-item"
                      href="#destacados"
                      >Destacados</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" id="recent-item" href="#recientes"
                      >Recientes</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" id="others-item" href="#otros"
                      >Otros</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="contacts-item"
                  href="./views/contacts.html"
                  >Contactos</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="my-book-item"
                  href="./views/myBooks.html"
                  >Mis Libros</a
                >
              </li>

              <li class="nav-item dropdown users-details" id="users-details" >
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Perfil
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      id="my-profile-item"
                      >Mi Perfil</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" id="favourite-item"
                      >Favoritos</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" id="messages-item"
                      >Mensajes</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" id="others-item" href="#otros"
                      >Cerrar Sesion</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
    </>
  );
};
