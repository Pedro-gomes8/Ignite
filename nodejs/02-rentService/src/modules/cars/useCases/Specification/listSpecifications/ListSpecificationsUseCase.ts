import { Specification } from "../../../model/Specification";
import { SpecificationsRepository } from "../../../repositories/SpecificationsRepository";

class ListSpecificationsUseCase {
  private specificationsRepository: SpecificationsRepository;

  constructor(specificationsRepository: SpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  execute(): Specification[] {
    const allSpecifications = this.specificationsRepository.list();
    return allSpecifications;
  }
}

export { ListSpecificationsUseCase };
