import { Product } from "@prisma/client";
import { prisma } from "../../config";

const createProduct = async (payload: Product) => {
  const result = await prisma.product.create({
    data: payload,
  });
  return result;
};

const getProducts = async () => {
  const result = await prisma.product.findMany({
    // include: {
    //   category: true,
    //   shop: true,
    //   Review: true,
    //   OrderItem: true,
    //   FlashSale: true,
    //   RecentProduct: true,
    // },
  });
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await prisma.product.findUniqueOrThrow({
    where: { id },
    // include: {
    //   category: true,
    //   shop: true,
    //   Review: true,
    //   OrderItem: true,
    //   FlashSale: true,
    //   RecentProduct: true,
    // },
  });
  return result;
};

const updateProduct = async (id: string, payload: Partial<Product>) => {
  await prisma.product.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.product.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteProduct = async (id: string) => {
  await prisma.product.findUniqueOrThrow({
    where: { id },
  });
  await prisma.product.delete({
    where: { id },
  });
};

export const productServices = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
