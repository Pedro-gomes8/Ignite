import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  private listCategoriesUseCase: ListCategoriesUseCase;

  constructor(listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase;
  }

  handle(req: Request, res: Response): Response {
    const allRepositories = this.listCategoriesUseCase.execute();
    return res.json(allRepositories);
  }
}

export { ListCategoriesController };
