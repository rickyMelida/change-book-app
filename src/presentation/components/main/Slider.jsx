import React from "react";
import { book1, book2, book3, book4 } from "../../../assets/images/books/books";

export const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel-container">
          <div className="carousel-item active">
            <img src={book1} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={book2} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={book3} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={book4} className="d-block w-100" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
