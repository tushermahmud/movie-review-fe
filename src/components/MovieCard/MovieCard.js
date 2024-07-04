import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{movie?.name}</CardTitle>
        <CardDescription>{movie?.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{movie?.runningTime}</p>
        <p>Rating</p>
      </CardContent>
      <CardFooter>
        <p>Add to Favorite</p>
      </CardFooter>
      <CardFooter>
        <Link href={`/${movie.id}`}>See Details</Link>
      </CardFooter>
    </Card>
  );
};
export default MovieCard;
