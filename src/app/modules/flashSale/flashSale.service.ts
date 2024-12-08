import { FlashSale } from "@prisma/client";
import { prisma } from "../../config";

const createFlashSale = async (payload: FlashSale) => {
  const result = await prisma.flashSale.create({
    data: payload,
  });
  return result;
};

const getFlashSales = async () => {
  const result = await prisma.flashSale.findMany({
    include: {
      product: true,
    },
  });
  return result;
};

const getSingleFlashSale = async (id: string) => {
  const result = await prisma.flashSale.findUniqueOrThrow({
    where: { id },
    include: {
      product: true,
    },
  });
  return result;
};

const updateFlashSale = async (id: string, payload: Partial<FlashSale>) => {
  await prisma.flashSale.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.flashSale.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteFlashSale = async (id: string) => {
  await prisma.flashSale.findUniqueOrThrow({
    where: { id },
  });
  await prisma.flashSale.delete({
    where: { id },
  });
};

export const flashSaleServices = {
  createFlashSale,
  getFlashSales,
  getSingleFlashSale,
  updateFlashSale,
  deleteFlashSale,
};
