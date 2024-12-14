import { Product } from "@prisma/client";
import { prisma } from "../../config";
import { fileUploader } from "../../utils/fileUploader";
import QueryBuilder, { QueryParams } from "../../builder/queryBuilder";

const createProduct = async (req: any) => {
  const photo = req.file;
  const price = parseFloat(req.body.price); // Convert price from string to float
  const inventory = parseInt(req.body.inventory, 10); // Convert inventory to integer
  if (photo) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(photo);
    req.body.photo = uploadToCloudinary?.secure_url;
  }

  // Assuming req.body contains shopId and categoryId
  const { shopId, categoryId, ...productData } = req.body;

  console.log("req => ", req.body);

  const result = await prisma.product.create({
    data: {
      ...productData, // Spread the remaining product data (name, price, etc.)
      price,
      inventory,
      shop: {
        connect: { id: shopId }, // Connect the product to the existing shop using shopId
      },
      category: {
        connect: { id: categoryId }, // Connect the product to the existing category using categoryId
      },
    },
  });

  return result;
};

const getProducts = async (queryParams: QueryParams) => {
  const queryBuilder = new QueryBuilder(queryParams);
  const prismaQuery = queryBuilder
    .addSearch(["name"]) // Add search fields (adjust as needed)
    .addFilters() // Add filters from queryParams
    .addSort() // Add sorting if specified in queryParams
    .addPagination() // Add pagination logic if specified in queryParams
    .build(); // Build the final Prisma query
  const result = await prisma.product.findMany({
    where: prismaQuery.where, // Apply the dynamically constructed `where` filters
    orderBy: prismaQuery.orderBy, // Apply the dynamically constructed `orderBy` sorting
    skip: prismaQuery.skip, // Pagination: Skip the right number of records
    take: prismaQuery.take, // Pagination: Limit the number of records to `take`
    include: {
      category: true, // Include related category data
      shop: true, // Include related shop data
      // Add other related models as needed
    },
  });
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await prisma.product.findUniqueOrThrow({
    where: { id },
    include: {
      category: true,
      shop: true,
      // Review: true,
      // OrderItem: true,
      // FlashSale: true,
      // RecentProduct: true,
    },
  });
  return result;
};

const updateProduct = async (id: string, req: any) => {
  await prisma.product.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.product.update({
    where: { id },
    data: { ...req.body },
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
