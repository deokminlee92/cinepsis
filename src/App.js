import React from "react";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";
//bootstrap & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./App.css";

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=bca6a436b3a5e8df17b445bb2150fdaf&language=en-US&page=1";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=bca6a436b3a5e8df17b445bb2150fdaf&query";

export default function App() {
  // Appel des données
  const [movies, setMovies] = useState([]);
  // Appel le résultat de recherche film
  const [query, setQuery] = useState("");

  //Fetch, Récupération des données
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  //Mise à jour Recherche film
  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    //try-catch
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bca6a436b3a5e8df17b445bb2150fdaf&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  //Recherche film handler
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar bg="black" expand="lg" variant="dark">
        {/* Container fluid => 100% full width */}
        <Container fluid>
          <Navbar.Brand href="">MovieDB App</Navbar.Brand>
          <Navbar.Brand href="">MovieDB App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={changeHandler}>
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name=""
                value={query}
                onChange={changeHandler}
              />
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="grid">
          {movies.map((movieReq) => (
            // ...movieReq permet de casser les données et de passer en props
            <Movies key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </>
  );
}
