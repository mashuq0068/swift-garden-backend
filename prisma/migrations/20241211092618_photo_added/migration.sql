/*
  Warnings:

  - You are about to drop the column `images` on the `products` table. All the data in the column will be lost.
  - Added the required column `photo` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "images",
ADD COLUMN     "photo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "photo" TEXT;
