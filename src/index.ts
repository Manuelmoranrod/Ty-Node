import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';
import Routes from './routes/index';
import BooksRoutes from './routes/books';

import './database';

// Initialize
const app = express();

// Config
const port = 3000
app.set('views', path.join(__dirname, 'views'))
const hbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
})
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs')

// Middlewear
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/', Routes)
app.use('/books', BooksRoutes)

// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Server start

app.listen(port, ()=>{
    console.log(`App listen at port ${port}`)
})