import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  private createSpecificationUseCase: CreateSpecificationUseCase;

  constructor(createSpecificationUseCase: CreateSpecificationUseCase) {
    this.createSpecificationUseCase = createSpecificationUseCase;
  }

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    this.createSpecificationUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpecificationController };
