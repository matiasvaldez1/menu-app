-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "categoriesId" TEXT NOT NULL,
    "foodShopId" TEXT NOT NULL,
    CONSTRAINT "Item_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("categoriesId", "description", "foodShopId", "id", "logo", "price", "title") SELECT "categoriesId", "description", "foodShopId", "id", "logo", "price", "title" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
