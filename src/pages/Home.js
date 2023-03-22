import React from "react";
import { NavBarElements } from "../components/HeaderBar";
import MainPage from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="HeaderBar-Container">
      <NavBarElements />
      <MainPage />
      <div className="SearchBar-Container">
        <SearchBar />
      </div>
    </div>
  );
}
