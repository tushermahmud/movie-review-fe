"use client";
import CommentSection from "@/components/Comments/Comments";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/Typography";
import useAllAPI from "@/context/API/allAPI";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [movie, setMovie] = useState(undefined);
  const { getSingleMovie, loading } = useAllAPI();

  const params = useParams();

  // console.log({ params.slug });
  useEffect(() => {
    getSingleMovie(params.slug).then((res) => {
      setMovie(res?.data);
    });
  }, [params.slug]);
  // const movie = {
  //   id: 1,
  //   name: "Inception",
  //   description:
  //     "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  //   runningTime: 148,
  //   thumbnail: "https://example.com/thumbnails/inception.jpg",
  // };
  if (loading) {
    return <>Loading.......</>;
  }
  return (
    <div className="flex">
      <div className="w-4/5 p-4">
        <Card>
          <CardHeader>
            <Image
              className="rounded"
              src={`https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg`}
              alt="movie"
              height={400}
              width={300}
            />
          </CardHeader>
          <CardContent>
            <TypographyH1 variant="h1">{movie?.name}</TypographyH1>
            <TypographyP variant="body1">{movie?.description}</TypographyP>
            <TypographyP variant="body2">
              Running time: {movie?.runningTime} mins
            </TypographyP>
          </CardContent>
        </Card>
        <CommentSection movieId={params?.slug} />
      </div>
      <div className="w-1/5 p-4">
        <TypographyH3 variant="h3" className="mb-4">
          Recent Movies
        </TypographyH3>
        {recentMovies.map((recentMovie) => (
          <Link href={`/movie/${recentMovie.id}`} key={recentMovie.id}>
            <Card className="mb-4 cursor-pointer">
              <CardHeader>
                <Image
                  className="rounded"
                  src={`https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg`}
                  alt="movie"
                  height={150}
                  width={90}
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
