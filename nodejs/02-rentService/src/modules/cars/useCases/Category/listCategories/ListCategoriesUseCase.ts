import { Category } from "../../../model/Category";
import { ICategoriesRepository } from "../../../types/ICategoriesRepository";

class ListCategoriesUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(): Category[] {
    const allCategories = this.categoriesRepository.list();

    return allCategories;
  }
}
export { ListCategoriesUseCase };
