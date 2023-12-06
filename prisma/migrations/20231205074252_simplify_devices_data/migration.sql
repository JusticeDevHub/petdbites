/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Devices` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Devices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Devices" ("deviceName", "email", "id", "userId") SELECT "deviceName", "email", "id", "userId" FROM "Devices";
DROP TABLE "Devices";
ALTER TABLE "new_Devices" RENAME TO "Devices";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
