import {Router} from 'express';
import {BooksService} from './books-service';

class BooksRouter {
  constructor(private readonly booksService: BooksService) {}

  get router() {
    const router = Router();

    router.get('/books', async (req, res, next) => {
      try {
        const books = await this.booksService.listBooks();

        return res.json(books);
      } catch (error) {
        return next(error);
      }
    });

    return router;
  }
}

export {BooksRouter};
