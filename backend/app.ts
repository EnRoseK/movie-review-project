import express, { Express } from 'express';
import cors from 'cors';

import userRoutes from './routes/userRoutes';
import moviesRoutes from './routes/movieRoutes';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/api/movies', moviesRoutes);

export default app;
