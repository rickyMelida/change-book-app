import React from "react";
import { Header } from "../common/header/Header";
import { ButtonUp } from "../common/ButtonUp";
import { Card } from "../common/Card";
import libro from "../../../assets/images/books/libro6.jpg";
import avatar from "../../../assets/images/avatar.svg";
import { Slider } from "./Slider";
import { Footer } from '../common/Footer';

export const Main = () => {
  const data = {
    id: 6,
    title: "ESCUELA DE TRADING",
    author: "FRANCISCA SERRANO",
    pages: 272,
    state: "Usado",
    by: "Vender",
    imgUrl: libro,
    price: "25.000",
    userOwner: {
      name: "Johan Doe",
      avatar,
    },
  };

  return (
    <>
      <Header />
      <ButtonUp />
      <div className="container-fluid">

        <div className="row">
          <div className="col-12">
            <Slider />
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
            <Card bookData={data} />
          </div>
          <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
            <Card bookData={data} />
          </div>
          <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
            <Card bookData={data} />
          </div>
          <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
            <Card bookData={data} />
          </div>
          <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
            <Card bookData={data} />
          </div>
          <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
            <Card bookData={data} />
          </div>
          <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
            <Card bookData={data} />
          </div>
          <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
            <Card bookData={data} />
          </div>
        </div>

      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>

      </div>
    </>
  );
};
