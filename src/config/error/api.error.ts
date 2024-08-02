export class ApiError extends Error {
   public message: string
   public statusCode: number

   constructor(message: string, statusCode: number = 400) {
      super(message);
      this.message = message
      this.statusCode = statusCode
   }
}