"use client";
import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import useAllAPI from "@/context/API/allAPI";
import AddMovieForm from "@/components/MovieCard/AddMovie";
import { AlertToast } from "@/components/Toast/AlertToast";
// import MovieCard from "@/components/MovieCard/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [triggerUpload, setTriggerUpload] = useState(undefined);

  const { getAllMovies, removeMovie } = useAllAPI();

  useEffect(() => {
    getAllMovies().then((res) => {
      setMovies(res?.data);
      setLoading(false);
    });
  }, [triggerUpload]);

  const handleDelete = (movieId) => {
    console.log({ movieId });
    removeMovie(movieId).then((res) => {
      if (!res.error) {
        setTriggerUpload(Math.random());
        AlertToast("success", "Deleted Successfully!");
      } else {
        AlertToast("error", "Not Deleted!");
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Admin - Add Movie</h1>
      <AddMovieForm setTriggerUpload={setTriggerUpload} />
      {movies?.map((movie) => (
        <MovieThumbnail
          key={movie._id}
          movie={movie}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

const MovieThumbnail = ({ movie, handleDelete }) => {
  return (
    <>
      <MovieCard movie={movie} deleteFlag={true} handleDelete={handleDelete} />
    </>
  );
};

export default Home;
