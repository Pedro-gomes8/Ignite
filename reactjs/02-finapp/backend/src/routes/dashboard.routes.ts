import { Router } from "express";

import { EntriesRepository } from "../repositories/EntriesRepository";

const dashboardRoutes = Router();
const entriesRepository = new EntriesRepository();

function parseMoney(price: string): number {
  return Number(price.replace(/[^0-9.-]+/g, ""));
}

dashboardRoutes.post("/", (req, res) => {
  let { price } = req.body;
  const { title, category } = req.body;

  price = parseMoney(price);

  entriesRepository.create({ title, price, category });

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
