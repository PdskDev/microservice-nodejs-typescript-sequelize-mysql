import { Router } from 'express';
import TutorialController from '../controllers/tutorial.controller';

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();
  apiPath: string = '/api/tutorials';

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    //Welcome test message
    this.router.get('/', this.controller.welcomeMessage);

    //Create a new tutorial
    this.router.post(this.apiPath, this.controller.create);

    //Retreille all tutorials
    this.router.get(this.apiPath, this.controller.findAll);

    //Retreive single tutorial
    this.router.get(`${this.apiPath}/:id`, this.controller.findOne);

    //Update single tutorial
    this.router.put(`${this.apiPath}/:id`, this.controller.update);

    //delete single tutorial
    this.router.delete(`${this.apiPath}/:id`, this.controller.delete);

    //delete all tutorials
    this.router.delete(this.apiPath, this.controller.deleteAll);

    //get all published tutorials
    this.router.get(
      `${this.apiPath}/published`,
      this.controller.findAllPublished
    );
  }
}

export default new TutorialRoutes().router;
