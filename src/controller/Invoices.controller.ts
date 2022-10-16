import {NextFunction, Request, Response} from "express";
import {Invoice} from "../entity/Invoice";
import { connection } from "../db-config/ormconfig";

export class InvocesController {

  private invoiceRepository = connection.getRepository(Invoice);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.invoiceRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.invoiceRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.invoiceRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.invoiceRepository.findOne(request.params.id);
    if (!userToRemove) throw new Error('Invoice not found');
    await this.invoiceRepository.remove(userToRemove);
  }
}
