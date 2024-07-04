"use client";
import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import useAllAPI from "@/context/API/allAPI";
import AddMovieForm from "@/components/MovieCard/AddMovie";
// import MovieCard from "@/components/MovieCard/MovieCard";

const Fav = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [triggerUpload, setTriggerUpload] = useState(undefined);

  const { getAllMovies } = useAllAPI();

  useEffect(() => {
    getAllMovies().then((res) => {
      setMovies(res?.data);
      setLoading(false);
    });
  }, [triggerUpload]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorite Movie Movie</h1>
      {movies?.map((movie) => (
        <MovieThumbnail key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

const MovieThumbnail = ({ movie }) => {
  return (
    <>
      <MovieCard movie={movie} delete={true} delete={true} />
    </>
  );
};

export default Fav;
