import { User } from "@prisma/client";
import { prisma } from "../../config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";

const signUp = async (payload: User) => {
  // Hash the password before saving to the database
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const result = await prisma.user.create({
    data: {
      ...payload,
      password: hashedPassword,
    },
  });

  return result;
};

const login = async (payload: Partial<User>) => {
  const email: string | undefined = payload?.email;
  const password: string | undefined = payload?.password;
  const user = await prisma.user.findUniqueOrThrow({
    where: { email },
  });

  // Validate the password
  const isPasswordMatched = await bcrypt.compare(password as string, user.password);
  if (!isPasswordMatched) {
    throw new Error("Invalid email or password");
  }

  // Generate a JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    config.jwt_token_secret as string,
    { expiresIn: "10h" }
  );

  return { user, token };
};

export const authServices = {
  signUp,
  login,
};
