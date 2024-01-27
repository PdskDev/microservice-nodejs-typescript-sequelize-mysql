import { Router } from 'express';
import TutorialController from '../controllers/tutorial.controller';

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {}
}

export default new TutorialRoutes().router;
