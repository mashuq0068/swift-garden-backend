import { User, UserRole } from "@prisma/client";
import { prisma } from "../../config";
interface QueryParams {
  role?: UserRole;
}

const getUsers = async (query: QueryParams) => {
  const { role } = query;

  const users = await prisma.user.findMany({
    where: role ? { role } : {},
    include: {
      Shop: true, 
    },
  });

  return users;
};

const getUserById = async (id: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id },
    include: {
      Follower: true,
      Review: true,
      Order: true,
      Shop: true, 
    },
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
