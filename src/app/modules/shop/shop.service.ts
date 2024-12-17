import { Shop } from "@prisma/client";
import { prisma } from "../../config";
import { fileUploader } from "../../utils/fileUploader";

const createShop = async (req: any) => {
  const logo = req.file;
  if (logo) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(logo);
    req.body.logo = uploadToCloudinary?.secure_url;
  }

  const result = await prisma.shop.create({
    data: { ...req.body },
  });
  return result;
};
const createManyShops = async (payload: Omit<Shop, 'id' | 'createdAt' | 'updatedAt'>[]) => {
  try {
    const result = await prisma.shop.createMany({
      data: payload,
      
    });
    return result;
  } catch (error) {
    console.error('Error creating shops:', error);
    throw new Error('Failed to create shops');
  }
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
 const res =  await prisma.shop.findUniqueOrThrow({
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
  createManyShops,
  deleteShop,
};
