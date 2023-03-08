import React from "react";
import axios from "axios";
import Rating from "./Rating";
import Carousel from "./Carousel";
import Cards from "./Cards";

import './Home.css'

const items = [
  {
    id: 1,
    title: "Item 1",
    description: "This is item 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Item 2",
    description: "This is item 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Item 3",
    description: "This is item 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Item 4",
    description: "This is item 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Item 5",
    description: "This is item 5",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Item 6",
    description: "This is item 6",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Item 7",
    description: "This is item 7",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Item 8",
    description: "This is item 8",
    image: "https://via.placeholder.com/150",
  },
];

const movies = [
  {
    title: "The Shawshank Redemption",
    release_date: "1994-09-22",
    poster:
      "https://resizing.flixster.com/nMPTDzWsB7Z44LSCJFlAzB7LuMY=/300x300/v2/https://flxt.tmsimg.com/assets/p15987_k_h9_ac.jpg",
    rating: 9.3,
  },
  {
    title: "The Godfather",
    release_date: "1972-03-24",
    poster:
      "https://media.gq-magazine.co.uk/photos/6389fc64ae86bf6162acc67c/1:1/w_1080,h_1080,c_limit/The-Godfather-Part-II-HEADER-1.jpg",
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    release_date: "2008-07-18",
    poster:
      "https://i0.wp.com/wipy.tv/wp-content/uploads/2020/05/guillermo-del-toro-prepara-scary-stories-to-tell-in-the-dark-2-46-2.jpg?fit=1000%2C600&ssl=1",
    rating: 9.0,
  },
  {
    title: "Forrest Gump",
    release_date: "1994-07-06",
    poster: "https://i.blogs.es/45d865/slack-imgs/1366_2000.jpeg",
    rating: 8.8,
  },
  {
    title: "Pulp Fiction",
    release_date: "1994-10-14",
    poster: "https://indiehoy.com/wp-content/uploads/2021/06/pulp-fiction.jpg",
    rating: 8.9,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    release_date: "2001-12-19",
    poster:
      "https://cdn.britannica.com/36/201736-050-8716478A/Ian-McKellen-Gandalf-Elijah-Wood-Frodo-The.jpg",
    rating: 8.8,
  },
  {
    title: "Inception",
    release_date: "2010-07-16",
    poster:
      "https://cdn.britannica.com/13/147813-050-37062815/Leonardo-DiCaprio-Joseph-Gordon-Levitt-Inception-Christopher-Nolan.jpg",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    release_date: "1999-03-31",
    poster:
      "https://static.mujerhoy.com/www/multimedia/202111/30/media/cortadas/matrix-cine-20-aniversario-keanu-reeves-kQeB-U1601200031072QB-1248x1248@MujerHoy.jpg",
    rating: 8.7,
  },
  {
    title: "The Silence of the Lambs",
    release_date: "1991-02-14",
    poster:
      "https://resize-media.festival-cannes.com/fit-in/1600x903/film_film/0002/18/5957cdadd5b7773234b8fa3fd37b047cc1911df3.jpeg",
    rating: 8.6,
  },
  {
    title: "Schindler's List",
    release_date: "1993-11-30",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzMjk5NjU3NV5BMl5BanBnXkFtZTcwMzU1MDAxMw@@._V1_.jpg",
    rating: 8.9,
  },
];

export default function Home({ popular_movies, allMovies, reset }) {
  // console.log(allMovies)
  return (
    <div className="home">
      <h1></h1>

      <div>
        <h3>Popular Movies</h3>
        <Carousel popular_movies={popular_movies}></Carousel>
      </div>

      <div></div>
      <button onClick={reset}>
        <h3>All movies</h3>
      </button>
      <div>
        <Cards movies={allMovies}></Cards>
      </div>
    </div>
  );
}
