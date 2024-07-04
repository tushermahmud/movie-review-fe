"use client";
import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import useAllAPI from "@/context/API/allAPI";
import AddMovieForm from "@/components/MovieCard/AddMovie";
import { AlertToast } from "@/components/Toast/AlertToast";
// import MovieCard from "@/components/MovieCard/MovieCard";

const Fav = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [triggerUpload, setTriggerUpload] = useState(undefined);

  const { getFavourites, removeFromFavourite } = useAllAPI();

  useEffect(() => {
    getFavourites().then((res) => {
      setMovies(res?.data);
      setLoading(false);
    });
  }, [triggerUpload]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  const handleDelete = (movieId) => {
    console.log({ movieId });
    removeFromFavourite(movieId).then((res) => {
      if (!res.error) {
        setTriggerUpload(Math.random());
        AlertToast("success", "Removed From Favorite Successfully!");
      } else {
        AlertToast("error", "Not Deleted!");
      }
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorite Movie Movie</h1>
      {movies?.map((movie) => (
        <MovieThumbnail
          key={movie._id}
          movie={movie}
          setTriggerUpload={setTriggerUpload}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

const MovieThumbnail = ({ movie, setTriggerUpload, handleDelete }) => {
  return (
    <>
      <MovieCard
        movie={movie}
        deleteFlag={true}
        setTriggerUpload={setTriggerUpload}
        handleDelete={handleDelete}
        fromFav={true}
      />
    </>
  );
};

export default Fav;
