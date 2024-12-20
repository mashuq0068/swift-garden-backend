import { Category } from "@prisma/client";
import { prisma } from "../../config";

const createCategory = async (payload: Omit<Category, "id" | "createdAt" | "updatedAt">) => {
  const result = await prisma.category.create({
    data: payload,
  });
  return result;
};
const createManyCategories = async (payload: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>[]) => {
  try {
    const result = await prisma.category.createMany({
      data: payload,
      skipDuplicates: true, 
    });
    return result;
  } catch (error) {
    console.error('Error creating categories:', error);
    throw new Error('Failed to create categories');
  }
};

const getCategories = async () => {
  const result = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  return result;
};

const getSingleCategory = async (id: string) => {
  const result = await prisma.category.findUniqueOrThrow({
    where: { id },
    include: {
      products: {
        include : {
          shop:true
        }
      }
      
    },
  });
  return result;
};

const updateCategory = async (id: string, payload: Partial<Omit<Category, "id" | "createdAt" | "updatedAt">>) => {
  await prisma.category.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.category.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteCategory = async (id: string) => {
  await prisma.category.findUniqueOrThrow({
    where: { id },
  });
  await prisma.category.delete({
    where: { id },
  });
};

export const categoryServices = {
  createCategory,
  getCategories,
  getSingleCategory,
  createManyCategories,
  updateCategory,
  deleteCategory,
};
