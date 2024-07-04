"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard/MovieCard";
// import MovieCard from "@/components/MovieCard/MovieCard";

const Home = () => {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios.get('/api/movies')
  //     .then(response => {
  //       setMovies(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {movies?.map((movie) => (
        <MovieThumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const MovieThumbnail = ({ movie }) => {
  return (
    <>
      <MovieCard movie={movie} />
    </>
  );
};

export default Home;

const movies = [
  {
    id: 1,
    name: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    runningTime: 148,
    thumbnail: "https://example.com/thumbnails/inception.jpg",
  },
  {
    id: 2,
    name: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    runningTime: 136,
    thumbnail: "https://example.com/thumbnails/the-matrix.jpg",
  },
  {
    id: 3,
    name: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    runningTime: 169,
    thumbnail: "https://example.com/thumbnails/interstellar.jpg",
  },
  {
    id: 4,
    name: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    runningTime: 152,
    thumbnail: "https://example.com/thumbnails/the-dark-knight.jpg",
  },
  {
    id: 5,
    name: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more.",
    runningTime: 139,
    thumbnail: "https://example.com/thumbnails/fight-club.jpg",
  },
];
