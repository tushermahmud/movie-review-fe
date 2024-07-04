import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/Typography";
import Link from "next/link";
import React from "react";

const page = () => {
  const movie = {
    id: 1,
    name: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    runningTime: 148,
    thumbnail: "https://example.com/thumbnails/inception.jpg",
  };

  return (
    <div className="flex">
      <div className="w-4/5 p-4">
        <Card>
          <CardHeader>
            <img
              src={movie.thumbnail}
              alt={movie.name}
              className="w-full h-64 object-cover"
            />
          </CardHeader>
          <CardContent>
            <TypographyH1 variant="h1">{movie.name}</TypographyH1>
            <TypographyP variant="body1">{movie.description}</TypographyP>
            <TypographyP variant="body2">
              Running time: {movie.runningTime} mins
            </TypographyP>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/5 p-4">
        <TypographyH3 variant="h3" className="mb-4">
          Recent Movies
        </TypographyH3>
        {recentMovies.map((recentMovie) => (
          <Link href={`/movie/${recentMovie.id}`} key={recentMovie.id}>
            <Card className="mb-4 cursor-pointer">
              <CardHeader>
                <img
                  src={recentMovie.thumbnail}
                  alt={recentMovie.name}
                  className="w-full h-32 object-cover"
                />
              </CardHeader>
              <CardContent>
                <TypographyH4>{recentMovie.name}</TypographyH4>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;

const recentMovies = [
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
];
