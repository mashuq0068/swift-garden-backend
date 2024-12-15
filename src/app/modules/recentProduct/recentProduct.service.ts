import { RecentProduct } from "@prisma/client";
import { prisma } from "../../config";

const createRecentProduct = async (payload: RecentProduct) => {
  const result = await prisma.recentProduct.create({
    data: payload,
  });
  return result;
};

const getRecentProducts = async () => {
  const result = await prisma.recentProduct.findMany({
    include: {
      product: true,
      user: true,
    },
  });
  return result;
};

const getSingleRecentProduct = async (id: string) => {
  const result = await prisma.recentProduct.findMany({
    where: { userId : id },
    include: {
      product: true,
      user: true,
    },
  });
  return result;
};

const updateRecentProduct = async (id: string, payload: Partial<RecentProduct>) => {
  await prisma.recentProduct.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.recentProduct.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteRecentProduct = async (id: string) => {
  await prisma.recentProduct.findUniqueOrThrow({
    where: { id },
  });
  await prisma.recentProduct.delete({
    where: { id },
  });
};

export const recentProductServices = {
  createRecentProduct,
  getRecentProducts,
  getSingleRecentProduct,
  updateRecentProduct,
  deleteRecentProduct,
};
