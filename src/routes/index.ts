import { Router } from 'express';
import { controller } from '../controllers/index-controller'

const router: Router = Router()

router.get('/', controller.index)

export default router