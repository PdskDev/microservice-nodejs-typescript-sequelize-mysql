import { Request, Response } from 'express';

import Tutorial from '../models/tutorial.model';
import tutorialRepoImpl from '../repositories/tutorial.repo.impl';

export default class TutorialController {
  async create(req: Request, res: Response) {
    const title = req.body.title;
    const published = req.body.published;

    return await tutorialRepoImpl
      .retrieveAll({ title, published })
      .then((tutorials) => {
        res.status(200).json({
          tutorials: tutorials,
        });
      });
  }

  async findAll(req: Request, res: Response) {}

  async findOne(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}

  async deleteAll(req: Request, res: Response) {}

  async findAllPublished(req: Request, res: Response) {}

  async welcomeMessage(req: Request, res: Response) {
    return res.json({
      message: 'Welcome to NadetDev Node.js Rest API with sequelize and Mysql',
    });
  }
}
