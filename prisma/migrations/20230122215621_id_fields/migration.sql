/*
  Warnings:

  - You are about to alter the column `foodShopId` on the `Categories` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `FoodShop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `FoodShop` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "foodShopId" INTEGER NOT NULL,
    CONSTRAINT "Categories_foodShopId_fkey" FOREIGN KEY ("foodShopId") REFERENCES "FoodShop" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Categories" ("foodShopId", "id", "logo", "title") SELECT "foodShopId", "id", "logo", "title" FROM "Categories";
DROP TABLE "Categories";
ALTER TABLE "new_Categories" RENAME TO "Categories";
CREATE TABLE "new_FoodShop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "qr" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    CONSTRAINT "FoodShop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_FoodShop" ("id", "logo", "name", "qr", "userId") SELECT "id", "logo", "name", "qr", "userId" FROM "FoodShop";
DROP TABLE "FoodShop";
ALTER TABLE "new_FoodShop" RENAME TO "FoodShop";
CREATE UNIQUE INDEX "FoodShop_qr_key" ON "FoodShop"("qr");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
