import {Book} from './models';

class BooksService {
  async listBooks(): Promise<Book[]> {
    return [
      {
        id: '1',
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K. Rowling',
        isbn10: '1408855895',
      },
      {
        id: '2',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        author: 'J.R.R Tolkien',
        isbn10: '0008567123',
      },
    ];
  }
}

export {BooksService};
