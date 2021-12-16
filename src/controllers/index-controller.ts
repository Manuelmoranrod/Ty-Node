import { Request, Response } from "express";

class Controller {

    public index (req: Request, res: Response): void {
        res.render('index', { title: 'Welcome to books app' })
    }

}

export const controller = new Controller();