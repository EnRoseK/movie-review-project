import { IMovie } from '@/interfaces/movie';
// import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

interface MovieDetailPageProps {
  movie: IMovie | null;
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`http://localhost:8000/api/movies/ids`);
//   const data = await res.json();
//   const paths = data.map((id: string) => ({ params: { _id: id } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<MovieDetailPageProps> = async ({ params }) => {
//   const res = await fetch(`http://localhost:8000/api/movies/${params?._id}`);
//   const data = await res.json();

//   return {
//     props: {
//       movie: data,
//     },
//   };
// };

const MovieDetailPage: FC<MovieDetailPageProps> = ({ movie }) => {
  if (!movie) return <h1>Movie not found</h1>;

  return <div>{movie.title}</div>;
};

export default MovieDetailPage;
