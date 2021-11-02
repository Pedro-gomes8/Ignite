import { Router } from "express";

import { EntriesRepository } from "../repositories/EntriesRepository";

const dashboardRoutes = Router();
const entriesRepository = new EntriesRepository();

dashboardRoutes.post("/", (req, res) => {
  const { title, category, transactionType, price } = req.body;

  entriesRepository.create({ title, price, category, transactionType });

  return res.status(201).send();
});

dashboardRoutes.get("/", (req, res) => {
  const entries = entriesRepository.getAllEntries();
  return res.json(entries);
});

dashboardRoutes.get("/balance", (req, res) => {
  const balance = entriesRepository.getBalance();
  return res.json(balance);
});

export { dashboardRoutes };
