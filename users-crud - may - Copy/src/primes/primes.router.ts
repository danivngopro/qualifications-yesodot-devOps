import { Router } from 'express';
import { ValidateRequest } from '../utils/joi';
import { wrapAsync } from '../utils/wrapper';
import { PrimeController } from './primes.controller';
import {
    checkTheAmountSchema
  } from './validator/primes.schema';


const PrimeRouter: Router = Router();

PrimeRouter.post('/prime/validate', wrapAsync(PrimeController.getNumbers));
PrimeRouter.get('/prime', ValidateRequest(checkTheAmountSchema) , wrapAsync(PrimeController.getPrimeNumbers));

export { PrimeRouter };