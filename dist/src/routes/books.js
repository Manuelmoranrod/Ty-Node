"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = require("../controllers/books-controller");
const router = (0, express_1.Router)();
router.get('/', books_controller_1.booksController.index);
router.get('/add', books_controller_1.booksController.renderFormBook);
router.post('/add', books_controller_1.booksController.saveBooks);
exports.default = router;
