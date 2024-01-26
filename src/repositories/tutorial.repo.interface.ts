import Tutorial from '../models/tutorial.model';

interface ITutorialRepository {
  save(tutorial: Tutorial): Promise<Tutorial>;
  retrieveAll(searchParams: {
    title: string;
    published: boolean;
  }): Promise<Tutorial[]>;
  retreiveById(tutorialId: number): Promise<Tutorial | null>;
  update(tutorial: Tutorial): Promise<number>;
  delete(tutorialId: number): Promise<number>;
  deleteAll(): Promise<number>;
}

export default ITutorialRepository;
