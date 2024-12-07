import { PrismaClient, UserRole } from "@prisma/client";
import QueryBuilder, { QueryParams } from "../../builder/queryBuilder";
import { fileUploader } from "../../utils/fileUploader";
const prisma = new PrismaClient();

const createAdmin = async (req: any) => {
  const data = req.body;
  const profilePhoto = req.file;
  console.log("profilePhoto => ",profilePhoto);
  if (profilePhoto) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(
      profilePhoto
    );
    req.body.profilePhoto = uploadToCloudinary?.secure_url;
  }
  const userData = {
    name: "boss",
    email: "mashuq@email.com",
    password: "29233093@#",
    role: UserRole.ADMIN,
  };
  const result = await prisma.$transaction(async (txn) => {
    await txn.user.create({
      data: userData,
    });
    const createAdmin = await txn.admin.create({
      data: data,
    });
    return createAdmin;
  });
  return result;
};

const getSingleAdmin = async (_id: string, payload: any) => {
  const result = await prisma.admin.update({
    where: {
      id: _id,
    },
    data: payload,
  });
  return result;
};

const getAllAdmin = async (queryParams: QueryParams) => {
  // Create an instance of QueryBuilder with query parameters
  const queryBuilder = new QueryBuilder(queryParams);

  // Apply the necessary methods to build the query
  const prismaQuery = queryBuilder
    .addSearch(["name", "email"]) // Add search fields (adjust as needed)
    .addFilters() // Add filters from queryParams
    .addSort() // Add sorting if specified in queryParams
    .addPagination() // Add pagination logic if specified in queryParams
    .build(); // Build the final Prisma query

  // Execute the Prisma query using the built query
  const result = await prisma.admin.findMany(prismaQuery);
  const meta = await queryBuilder.countTotal(prisma.admin);

  return {
    data: result,
    meta,
  };
};

export const userServices = {
  createAdmin,
  getAllAdmin,
  getSingleAdmin,
};
