import ITutorialRepository from './tutorial.repo.interface';
import { Op } from 'sequelize';
import SearchCondition from './conditionSearch.repo';
import Tutorial from '../models/tutorial.model';

class TutorialRepository implements ITutorialRepository {
  async save(tutorial: Tutorial): Promise<Tutorial> {
    try {
      return await Tutorial.create({
        title: tutorial.title,
        description: tutorial.description,
        published: tutorial.published,
      });
    } catch (error) {
      throw new Error('Failed to create new tutorial: ' + error);
    }
  }

  async retrieveAll(searchParams: {
    title?: string;
    published?: boolean;
  }): Promise<Tutorial[]> {
    try {
      let condition: SearchCondition;

      if (searchParams?.published) condition.published = true;

      if (searchParams?.title)
        condition.title = { [Op.like]: `%${searchParams.title}%` };

      return await Tutorial.findAll({
        where: {
          condition,
        },
      });
    } catch (error) {
      throw new Error('Failed to retreive list of tutorials: ' + error);
    }
  }

  async retreiveById(tutorialId: number): Promise<Tutorial> {
    throw new Error('Method not implemented.');
  }

  async update(tutorial: Tutorial): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async delete(tutorialId: number): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async deleteAll(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}

export default new TutorialRepository();
