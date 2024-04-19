/*
  Warnings:

  - You are about to drop the column `admin_id` on the `Pegawai` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_admin_id_fkey";

-- AlterTable
ALTER TABLE "Pegawai" DROP COLUMN "admin_id";
