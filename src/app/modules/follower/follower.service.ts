import { Follower } from "@prisma/client";
import { prisma } from "../../config";

const createFollower = async (payload: Follower) => {
  const result = await prisma.follower.create({
    data: payload,
  });
  return result;
};

const getFollowers = async () => {
  const result = await prisma.follower.findMany({
    include: {
      user: true,
      shop: true,
    },
  });
  return result;
};

const getSingleFollower = async (id: string) => {
  const result = await prisma.follower.findUniqueOrThrow({
    where: { id },
    include: {
      user: true,
      shop: true,
    },
  });
  return result;
};

const updateFollower = async (id: string, payload: Partial<Follower>) => {
  await prisma.follower.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.follower.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteFollower = async (id: string) => {
  await prisma.follower.findUniqueOrThrow({
    where: { id },
  });
  await prisma.follower.delete({
    where: { id },
  });
};

export const followerServices = {
  createFollower,
  getFollowers,
  getSingleFollower,
  updateFollower,
  deleteFollower,
};
