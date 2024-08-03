import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError, ZodSchema } from "zod";

interface IRequestSchema {
   body?: AnyZodObject
   query?: AnyZodObject
   params?: AnyZodObject
}

export class ValidateBody {
   static execute(schemas: IRequestSchema) {
      return async (req: Request, res: Response, next: NextFunction) => {
         if (schemas.params) {
            req.params = await schemas.params.parseAsync(req.params);
         }

         if (schemas.body) {
            req.body = await schemas.body.parseAsync(req.body);
         }

         if (schemas.query) {
            req.query = await schemas.query.parseAsync(req.query);
         }

         next();
      };
   }
}