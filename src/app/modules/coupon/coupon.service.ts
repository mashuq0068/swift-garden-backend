import { Coupon } from "@prisma/client";
import { prisma } from "../../config";

const createCoupon = async (payload: Coupon) => {
  const result = await prisma.coupon.create({
    data: payload,
  });
  return result;
};

const getCoupons = async () => {
  const result = await prisma.coupon.findMany();
  return result;
};

const getSingleCoupon = async (id: string) => {
  const result = await prisma.coupon.findUniqueOrThrow({
    where: { id },
  });
  return result;
};

const updateCoupon = async (id: string, payload: Partial<Coupon>) => {
  await prisma.coupon.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.coupon.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteCoupon = async (id: string) => {
  await prisma.coupon.findUniqueOrThrow({
    where: { id },
  });
  await prisma.coupon.delete({
    where: { id },
  });
};

export const couponServices = {
  createCoupon,
  getCoupons,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon,
};
