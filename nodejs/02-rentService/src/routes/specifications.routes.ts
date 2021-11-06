import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/Specification/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/Specification/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
  return listSpecificationsController.handle(req, res);
});

export { specificationRoutes };
