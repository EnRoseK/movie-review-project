import { Request, Response } from 'express';
import MovieModel, { IMovie } from '../models/movieModel';

export const countAllMovies = async (req: Request, res: Response) => {
  res.json(await MovieModel.count({}));
};

export const findAllMovies = async (req: Request, res: Response) => {
  const { limit = '10', skip = '0', ordering = 'released-asc', q: search = '' } = req.query;
  let sort = 'released';

  switch (ordering) {
    case 'released-desc':
      sort = '-released';
      break;
    case 'imdb-rating-desc':
      sort = '-awards.wins';
      break;
    case 'title-asc':
      sort = 'title';
      break;
    case 'title-desc':
      sort = '-title';
      break;
    default:
      sort = 'released';
  }

  const result: IMovie[] = await MovieModel.find({ title: new RegExp('^' + search, 'i') })
    .sort(sort)
    .limit(Number(limit))
    .skip(Number(skip));
  res.json(result);
};

export const findMovieById = async (req: Request, res: Response) => {
  const { _id } = req.params;

  const result: IMovie | null = await MovieModel.findById(_id);
  res.json(result);
};
