import express from 'express';
import {BooksService, BooksRouter} from './books';

const app = express();

const booksService = new BooksService();

const booksRouter = new BooksRouter(booksService).router;

app.use(booksRouter);

export {app};
