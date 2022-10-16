import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import * as morgan from 'morgan';
import './db-config/ormconfig'
import { Routes } from "./routes";
import { body, param, validationResult } from "express-validator";
const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
import {InvocesController} from './controller/Invoices.controller'


const validatorSave =[
    body('amount').isNumeric(),
    body('createdAt').isDate(),
    body('description').isString().withMessage('description mut be a string')
];


app.get('/invoices', async(req: Request, res: Response, next: Function) => { 
  const result = await new InvocesController().all(req, res, next);
  res.json(result)
} )

app.post('/invoices', validatorSave, async(req: Request, res: Response, next: Function) => { 
  const result = await new InvocesController().save(req, res, next);
  res.json(result)
} )


// Routes.forEach(route => {
//   (app as any)[route.method](route.route,
//     ...route.validation,
//     async (req: Request, res: Response, next: Function) => {

//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const result = await (new (route.controller as any))[route.action](req, res, next);
//       res.json(result);
//     } catch(err) {
//       next(err);
//     }
//   });
// });


const PORT = 3000
app.listen(PORT,async()=> {
  console.log(`Server run at port ${PORT}`)
})