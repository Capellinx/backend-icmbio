import { app } from "./app";
import { env } from "./env";


app.listen(env.PORT, () => {
   console.log(`🚀 Server started on port ${env.PORT}`);
})