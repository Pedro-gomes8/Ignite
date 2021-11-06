import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  private listSpecificationsUseCase: ListSpecificationsUseCase;

  constructor(listSpecificationsUseCase: ListSpecificationsUseCase) {
    this.listSpecificationsUseCase = listSpecificationsUseCase;
  }

  handle(req: Request, res: Response): Response {
    const allSpecifications = this.listSpecificationsUseCase.execute();
    return res.json(allSpecifications);
  }
}

export { ListSpecificationsController };
