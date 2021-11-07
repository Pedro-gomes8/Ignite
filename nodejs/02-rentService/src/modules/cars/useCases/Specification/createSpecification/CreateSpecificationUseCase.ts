import { ISpecificationsRepository } from "../../../repositories/types/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  private specificationsRepository: ISpecificationsRepository;

  constructor(specificationRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationRepository;
  }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification Already Exists");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
