/*
  Warnings:

  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('LEAFY_GREENS', 'ROOT_VEGETABLES', 'CRUCIFEROUS', 'GOURDS_AND_SQUASHES', 'ALLIUM_VEGETABLES', 'NIGHTSHADES');

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "categoryId",
ADD COLUMN     "category" "Category" NOT NULL;

-- DropTable
DROP TABLE "categories";
