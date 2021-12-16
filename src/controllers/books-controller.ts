import { Request, Response } from 'express';
import BookModel, { Book } from '../model/books';

class BooksController {

    public async index(req: Request, res: Response) {
        const books: Book[] = await BookModel.find({}).lean();
        console.log(books)
        res.render('books/index', { 
            title: 'Books',
            books
        });
    }
    
    public renderFormBook(req: Request, res: Response) {
        res.render('books/add', {
            title: 'Add a book'
        });
    }

    public async saveBooks(req: Request, res: Response) {
        
        const { title, author, isbn } = req.body
        const newBook: Book = new BookModel({ 
            title, 
            author, 
            isbn 
        });
        await newBook.save();
        res.redirect('/books')
    }
}

export const booksController = new BooksController();
