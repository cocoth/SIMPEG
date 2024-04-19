/*
  Warnings:

  - You are about to drop the column `adminId` on the `Fasilitas` table. All the data in the column will be lost.
  - You are about to drop the column `pegawai_id` on the `Fasilitas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Fasilitas" DROP CONSTRAINT "Fasilitas_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Fasilitas" DROP CONSTRAINT "Fasilitas_pegawai_id_fkey";

-- AlterTable
ALTER TABLE "Fasilitas" DROP COLUMN "adminId",
DROP COLUMN "pegawai_id";

-- CreateTable
CREATE TABLE "_FasilitasToPegawai" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FasilitasToPegawai_AB_unique" ON "_FasilitasToPegawai"("A", "B");

-- CreateIndex
CREATE INDEX "_FasilitasToPegawai_B_index" ON "_FasilitasToPegawai"("B");

-- AddForeignKey
ALTER TABLE "_FasilitasToPegawai" ADD CONSTRAINT "_FasilitasToPegawai_A_fkey" FOREIGN KEY ("A") REFERENCES "Fasilitas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FasilitasToPegawai" ADD CONSTRAINT "_FasilitasToPegawai_B_fkey" FOREIGN KEY ("B") REFERENCES "Pegawai"("id") ON DELETE CASCADE ON UPDATE CASCADE;
