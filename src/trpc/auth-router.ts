import { AuthCredentialsValidator } from "../lib/validators/account-validator-credentials";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";



const authRouter = router({
    createPayloadUser: publicProcedure
      .input(AuthCredentialsValidator)
      .mutation(async ({ input }) => {
        const { email, password } = input;
  
        const payload = await getPayloadClient();
        //if user is already exists
        const { docs: users } = await payload.find({
          collection: "users",
          where: {
            email: {
              equals: email,
            },
          },
        });
  
        if(users.length!==0) throw new TRPCError({code:'CONFLICT'})
  
        await payload.create({collection:'users',data:{}})
      }),
  });
  export default authRouter