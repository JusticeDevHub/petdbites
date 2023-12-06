/*
  Warnings:

  - You are about to drop the column `userId` on the `Devices` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Devices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "connected" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Devices" ("deviceName", "email", "id") SELECT "deviceName", "email", "id" FROM "Devices";
DROP TABLE "Devices";
ALTER TABLE "new_Devices" RENAME TO "Devices";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
