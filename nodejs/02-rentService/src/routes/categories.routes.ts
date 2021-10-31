import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (categoryAlreadyExists) {
    return res.status(400).json({ error: `Category ${name} already exists` });
  }
  categoriesRepository.create({ name, description });
  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const allRepositories = categoriesRepository.list();
  return res.json(allRepositories);
});

export { categoriesRoutes };