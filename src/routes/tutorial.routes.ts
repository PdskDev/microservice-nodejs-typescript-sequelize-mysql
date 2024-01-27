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

    //delete single tutorial
    this.router.delete(this.apiPath, this.controller.deleteAll);

    //delete single tutorial
    this.router.delete(
      `${this.apiPath}/published`,
      this.controller.findAllPublished
    );
  }
}

export default new TutorialRoutes().router;
