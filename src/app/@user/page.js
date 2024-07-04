"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard/MovieCard";
import useAllAPI from "@/context/API/allAPI";
import { AlertToast } from "@/components/Toast/AlertToast";
// import MovieCard from "@/components/MovieCard/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favList, setFavList] = useState([]);
  const [triggerUpload, setTriggerUpload] = useState(undefined);

  const { getAllMovies, getFavourites, removeFromFavourite } = useAllAPI();

  useEffect(() => {
    getAllMovies().then((res) => {
      setMovies(res?.data);
      setLoading(false);
    });
  }, [triggerUpload]);

  useEffect(() => {
    getFavourites().then((res) => {
      setFavList(res?.data);
      setLoading(false);
    });
  }, [triggerUpload]);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {movies?.map((movie) => (
        <MovieThumbnail
          favList={favList}
          key={movie._id}
          movie={movie}
          setTriggerUpload={setTriggerUpload}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

const MovieThumbnail = ({ movie, favList, setTriggerUpload, handleDelete }) => {
  return (
    <>
      <MovieCard
        movie={movie}
        favList={favList}
        setTriggerUpload={setTriggerUpload}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Home;
