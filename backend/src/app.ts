import express from 'express';
import cors from 'cors';
import moviesRouter from './routes/movies';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/movies', moviesRouter);

export default app;
