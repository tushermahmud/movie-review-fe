import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import useAllAPI from "@/context/API/allAPI";
import { AlertToast } from "../Toast/AlertToast";

const MovieCard = ({
  movie,
  deleteFlag,
  handleDelete,
  fromFav,
  favList = [],
  setTriggerUpload,
}) => {
  const isFav = favList.findIndex((fav) => fav._id === movie._id) > -1;
  const { addToFavorite } = useAllAPI();
  const handleAddToFav = (movieId) => {
    addToFavorite(movieId).then((res) => {
      if (!res.error) {
        setTriggerUpload(Math.random());
        AlertToast("success", "Added Successfully!");
      } else {
        AlertToast("error", "Not Deleted!");
      }
    });
  };
  return (
    <Card>
      <div className="flex items-center p-4">
        <div className="rounded">
          <Image
            className="rounded"
            src={`https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg`}
            alt="movie"
            height={200}
            width={150}
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle>{movie?.name}</CardTitle>
            <CardDescription>{movie?.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{movie?.runningTime}</p>
            <p>Rating: 4.5</p>
          </CardContent>
          {!fromFav && (
            <CardFooter>
              {isFav && (
                <p onClick={() => handleDelete(movie._id)}>
                  Remove From Favorite
                </p>
              )}
              {!isFav && (
                <p onClick={() => handleAddToFav(movie?._id)}>
                  Add to Favorite
                </p>
              )}
            </CardFooter>
          )}
          <CardFooter>
            <Link href={`/movies/${movie._id}`}>
              <Button
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 hover:text-black transition duration-300"
                text="Details"
                fill
                // onClick={handleSubmit}
                // disabled={loading}
              />
            </Link>

            {deleteFlag && (
              <Button
                className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 hover:text-black transition duration-300"
                text={fromFav ? "Remove From Favorite" : "Delete"}
                fill
                onClick={() => handleDelete(movie._id)}
                // disabled={loading}
              />
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};
export default MovieCard;
