import React from "react";
import { Navbar } from "./Navbar";
import { InputSearch } from "./InputSearch";
import { UserSection } from "./UserSection";
import book from "../../../../assets/images/book.png";

export const Header = () => {
  return (
    <>
      <header id="home">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#" title="Inicio">
              <img src={book} alt="Book Change" width="50" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <Navbar />
              <InputSearch />
              <UserSection />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
