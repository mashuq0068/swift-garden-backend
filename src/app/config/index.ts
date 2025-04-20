import path from "path";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export const prisma = new PrismaClient()

export default {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
    bcrypt_salt_rounds : process.env.BCRYPT_SALT_ROUNDS,
    jwt_token_secret:process.env.JWT_TOKEN_SECRET,
    ai_secret_key : process.env.AI_SECRET_KEY
}
