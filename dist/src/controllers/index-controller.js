"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
class Controller {
    index(req, res) {
        res.render('index', { title: 'Welcome to books app' });
    }
}
exports.controller = new Controller();
