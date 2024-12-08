import { Review } from "@prisma/client";
import { prisma } from "../../config";

const createReview = async (payload: Review) => {
  const result = await prisma.review.create({
    data: payload,
  });
  return result;
};

const getReviews = async () => {
  const result = await prisma.review.findMany({
    include: {
      user: true,
      product: true,
    },
  });
  return result;
};

const getSingleReview = async (id: string) => {
  const result = await prisma.review.findUniqueOrThrow({
    where: { id },
    include: {
      user: true,
      product: true,
    },
  });
  return result;
};

const updateReview = async (id: string, payload: Partial<Review>) => {
  await prisma.review.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.review.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteReview = async (id: string) => {
  await prisma.review.findUniqueOrThrow({
    where: { id },
  });
  await prisma.review.delete({
    where: { id },
  });
};

export const reviewServices = {
  createReview,
  getReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
