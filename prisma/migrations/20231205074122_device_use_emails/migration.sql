/*
  Warnings:

  - Added the required column `email` to the `Devices` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Devices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    CONSTRAINT "Devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Devices" ("createdAt", "deviceName", "id", "updatedAt", "userId") SELECT "createdAt", "deviceName", "id", "updatedAt", "userId" FROM "Devices";
DROP TABLE "Devices";
ALTER TABLE "new_Devices" RENAME TO "Devices";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
