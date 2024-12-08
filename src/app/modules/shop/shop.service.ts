import { Shop } from "@prisma/client";
import { prisma } from "../../config";

const createShop = async (payload: Shop) => {
  const result = await prisma.shop.create({
    data: payload,
  });
  return result;
};

const getShops = async () => {
  const result = await prisma.shop.findMany({
    include: {
      user: true,
      Product: true,
      Follower: true,
      Order: true,
    },
  });
  return result;
};

const getSingleShop = async (id: string) => {
  const result = await prisma.shop.findUniqueOrThrow({
    where: { id },
    include: {
      user: true,
      Product: true,
      Follower: true,
      Order: true,
    },
  });
  return result;
};

const updateShop = async (id: string, payload: Partial<Shop>) => {
  await prisma.shop.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.shop.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteShop = async (id: string) => {
  await prisma.shop.findUniqueOrThrow({
    where: { id },
  });
  await prisma.shop.delete({
    where: { id },
  });
};

export const shopServices = {
  createShop,
  getShops,
  getSingleShop,
  updateShop,
  deleteShop,
};
