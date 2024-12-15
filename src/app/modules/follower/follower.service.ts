import { prisma } from "../../config"; // Assuming your Prisma config is set up properly
import { Follower } from "@prisma/client";

const createFollower = async (userId: string, shopId: string): Promise<Follower> => {
  // Add a follower relationship between user and shop
  const result = await prisma.follower.create({
    data: { userId, shopId },
  });
  return result;
};

const isFollowing = async (userId: string, shopId: string): Promise<boolean> => {
  // Check if the user is already following the shop
  const result = await prisma.follower.findFirst({
    where: { userId, shopId },
  });
  return !!result;
};

const deleteFollower = async (userId: string, shopId: string): Promise<void> => {
  // Remove the follower relationship between user and shop
  await prisma.follower.deleteMany({
    where: { userId, shopId },
  });
};

const getFollowersByShop = async (shopId: string): Promise<Follower[]> => {
  // Get all users following a specific shop
  const result = await prisma.follower.findMany({
    where: { shopId },
    include: {
      user: true, // Assuming 'user' is a relation in your Prisma schema
    },
  });
  return result;
};

const getFollowedShopsByUser = async (userId: string): Promise<Follower[]> => {
  // Get all shops followed by a specific user
  const result = await prisma.follower.findMany({
    where: { userId },
    include: {
      shop: true, // Assuming 'shop' is a relation in your Prisma schema
    },
  });
  return result;
};

const toggleFollower = async (userId: string, shopId: string): Promise<string> => {
  // Toggle follow/unfollow functionality
  const isFollowed = await isFollowing(userId, shopId);
  if (isFollowed) {
    await deleteFollower(userId, shopId);
    return "unfollowed";
  } else {
    await createFollower(userId, shopId);
    return "followed";
  }
};

// Optional: Retrieve all followers (for admin or analytics purposes)
const getAllFollowers = async (): Promise<Follower[]> => {
  const result = await prisma.follower.findMany({
    include: {
      user: true,
      shop: true,
    },
  });
  return result;
};

export const followerServices = {
  createFollower,
  isFollowing,
  deleteFollower,
  getFollowersByShop,
  getFollowedShopsByUser,
  toggleFollower,
  getAllFollowers,
};
