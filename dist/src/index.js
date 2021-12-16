"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const books_1 = __importDefault(require("./routes/books"));
require("./database");
// Initialize
const app = (0, express_1.default)();
// Config
const port = 3000;
app.set('views', path_1.default.join(__dirname, 'views'));
const hbs = (0, express_handlebars_1.create)({
    extname: '.hbs',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
// Middlewear
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use('/', index_1.default);
app.use('/books', books_1.default);
// Static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Server start
app.listen(port, () => {
    console.log(`App listen at port ${port}`);
});
