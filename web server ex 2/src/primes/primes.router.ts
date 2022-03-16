import { Router } from 'express';
import { ValidateRequest } from '../utils/joi';
import { wrapAsync } from '../utils/wrapper';
import { PrimeController } from './primes.controller';
import {
    checkTheAmountSchema, checkTheNumbersSchema
  } from './validator/primes.schema';


const PrimeRouter: Router = Router();

PrimeRouter.post('/prime/validate', ValidateRequest(checkTheNumbersSchema) ,wrapAsync(PrimeController.getNumbers)); 
PrimeRouter.get('/prime', ValidateRequest(checkTheAmountSchema) , wrapAsync(PrimeController.getPrimeNumbers));

export { PrimeRouter };