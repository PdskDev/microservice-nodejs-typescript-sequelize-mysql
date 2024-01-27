import { Request, Response } from 'express';

export default class TutorialController {
  async create(req: Request, res: Response) {}

  async findAll(req: Request, res: Response) {}

  async findOne(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}

  async deleteAll(req: Request, res: Response) {}

  async findAllPublished(req: Request, res: Response) {}

  async welcomeMessage(req: Request, res: Response) {
    res.json({
      message: 'Welcome to NadetDev Node.js Rest API with sequelize and Mysql',
    });
  }
}
