import { body, param } from "express-validator";
import { InvocesController } from "./controller/Invoices.controller";

export const Routes = [{
  method: "get",
  route: "/invoices",
  controller: InvocesController,
  action: "all",
  validation: [],
}, {
  method: "get",
  route: "/invoices/:id",
  controller: InvocesController,
  action: "one",
  validation: [
    param('id').isUUID(),
  ],
}, {
  method: "post",
  route: "/invoices",
  controller: InvocesController,
  action: "save",
  validation: [
    // body('id').isString(),
    body('amount').isNumeric(),
    body('createdAt').isDate(),
    body('description').isString().withMessage('description mut be a string')
  ],
}];