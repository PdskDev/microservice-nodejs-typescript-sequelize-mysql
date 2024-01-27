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
    try {
      return Tutorial.findByPk(tutorialId);
    } catch (error) {
      throw new Error(
        `Failed to retreive tutorial with id ${tutorialId}: ` + error
      );
    }
  }

  async update(tutorial: Tutorial): Promise<number> {
    const { id, title, description, published } = tutorial;
    try {
      const affectedRows = await Tutorial.update(
        { title, description, published },
        { where: { id: id } }
      );

      return affectedRows[0];
    } catch (error) {
      throw new Error(`Failed to update tutorial with id ${id}: ` + error);
    }
  }

  async delete(tutorialId: number): Promise<number> {
    try {
      return await Tutorial.destroy({
        where: { id: tutorialId },
      });
    } catch (error) {
      throw new Error(
        `Failed to delete tutorial with id ${tutorialId}: ` + error
      );
    }
  }

  async deleteAll(): Promise<number> {
    try {
      return Tutorial.destroy({
        where: {},
        truncate: false,
      });
    } catch (error) {
      throw new Error(`Failed to delete tutorials: ` + error);
    }
  }
}

export default new TutorialRepository();
