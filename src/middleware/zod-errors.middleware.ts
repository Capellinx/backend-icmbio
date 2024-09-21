import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

interface IRequestSchemas {
   params?: AnyZodObject;
   body?: AnyZodObject;
   query?: AnyZodObject;
}

export class ZodRequestValidate {
   static execute(schema: IRequestSchemas) {
      return async (req: Request, res: Response, next: NextFunction) => {
         try {
            if (schema.params) {
               req.params = await schema.params.parseAsync(req.params);
            }

            if (schema.body) {
               req.body = await schema.body.parseAsync(req.body);
            }

            if (schema.query) {
               req.query = await schema.query.parseAsync(req.query);
            }
            next();

         } catch (error) {
            if (error instanceof ZodError) {
               return res.status(409).json({ message: error.errors });

            }
         }
      }
   }
}