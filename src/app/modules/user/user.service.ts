import { User } from "@prisma/client";
import { prisma } from "../../config";

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getUserById = async (id: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id },
  });
  return user;
};

const deleteUser = async (id: string) => {
  await prisma.user.findUniqueOrThrow({
    where: { id },
  });
  await prisma.user.delete({
    where: { id },
  });
  return { message: "User deleted successfully" };
};

export const userServices = {
  getUsers,
  getUserById,
  deleteUser,
};