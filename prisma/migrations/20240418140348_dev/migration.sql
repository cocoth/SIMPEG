-- CreateTable
CREATE TABLE "Pegawai" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "no_telp" TEXT NOT NULL,
    "tanggal_lahir" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "foto_profile" BYTEA,
    "gaji_pokok" DOUBLE PRECISION NOT NULL,
    "tunjangan" DOUBLE PRECISION NOT NULL,
    "potongan_gaji" DOUBLE PRECISION NOT NULL,
    "kehadiran" INTEGER NOT NULL,
    "cuti" INTEGER NOT NULL,
    "admin_id" INTEGER,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fasilitas" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "potongan_biaya" DOUBLE PRECISION NOT NULL,
    "pegawai_id" INTEGER NOT NULL,
    "adminId" INTEGER,

    CONSTRAINT "Fasilitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_email_key" ON "Pegawai"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fasilitas" ADD CONSTRAINT "Fasilitas_pegawai_id_fkey" FOREIGN KEY ("pegawai_id") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fasilitas" ADD CONSTRAINT "Fasilitas_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
