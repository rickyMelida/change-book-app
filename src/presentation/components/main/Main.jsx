import React from "react";
import { Header } from "../common/header/Header";
import { ButtonUp } from "../common/ButtonUp";
import { Card } from "../common/Card";
import libro from "../../../assets/images/books/libro6.jpg";
import avatar from "../../../assets/images/avatar.svg";
import { Slider } from "./Slider";

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
        <Slider />
        <Card bookData={data} />
      </div>
    </>
  );
};
