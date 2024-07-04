"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard/MovieCard";
import useAllAPI from "@/context/API/allAPI";
// import MovieCard from "@/components/MovieCard/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { getAllMovies } = useAllAPI();

  useEffect(() => {
    getAllMovies().then((res) => {
      setMovies(res?.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {movies?.map((movie) => (
        <MovieThumbnail key={movie._id} movie={movie} />
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
