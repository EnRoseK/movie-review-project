import { IMovie } from '@/interfaces/movie';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface MovieDetailPageProps {
  movie: IMovie;
}

export const getServerSideProps: GetServerSideProps<MovieDetailPageProps> = async ({ query }) => {
  const { _id } = query;
  const res = await fetch(`http://localhost:8000/api/movies/${_id}`);
  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
};

const MovieDetailPage: FC<MovieDetailPageProps> = ({ movie }) => {
  if (!movie) return <h1>Movie not found</h1>;

  return <div>{movie.title}</div>;
};

export default MovieDetailPage;
