import { Request, Response } from "express";
import { GetPublicInformationUseCase } from "./get-public-information";


export class GetPublicInformationController {
   constructor(
      private getPublicInformationUseCase: GetPublicInformationUseCase
   ) { }

   async handle(request: Request, response: Response) {
      const { publicId } = request.params

      const { collaborator } = await this.getPublicInformationUseCase.execute(publicId)

      return response.status(201).json({
         isValid: true,
         collaborator
      })
   }
}