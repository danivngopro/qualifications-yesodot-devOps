import { Router } from 'express';
import { ValidateRequest } from '../utils/joi';
import { wrapAsync } from '../utils/wrapper';
import { PrimeController } from './primes.controller';
import {
  NumbersSchema, createInputNumberSchema
  } from './validator/primes.schema';


const PrimeRouter: Router = Router();

PrimeRouter.post('/prime/validate', ValidateRequest(NumbersSchema) ,wrapAsync(PrimeController.areNumbersPrimes)); 
PrimeRouter.get('/prime', ValidateRequest(createInputNumberSchema) , wrapAsync(PrimeController.returnPrimeInRange));

export { PrimeRouter };