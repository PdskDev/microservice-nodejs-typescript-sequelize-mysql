import ITutorialRepository from './tutorial.repo.interface';
import Tutorial from '../models/tutorial.model';

class TutorialRepository implements ITutorialRepository {
  async save(tutorial: Tutorial): Promise<Tutorial> {
    throw new Error('Method not implemented.');
  }

  async retrieveAll(searchParams: {
    title: string;
    published: boolean;
  }): Promise<Tutorial[]> {
    throw new Error('Method not implemented.');
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

export default TutorialRepository;
