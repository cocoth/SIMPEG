-- CreateTable
CREATE TABLE "Pegawai" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "gender" TEXT,
    "alamat" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "no_telp" TEXT NOT NULL,
    "jabatan" TEXT,
    "tanggal_lahir" DATE DEFAULT CURRENT_TIMESTAMP,
    "foto_profile" BYTEA,
    "status" TEXT NOT NULL,
    "tanggal_masuk" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gaji_pokok" DOUBLE PRECISION NOT NULL,
    "tunjangan" DOUBLE PRECISION NOT NULL,
    "potongan_gaji" DOUBLE PRECISION NOT NULL,
    "kehadiran" INTEGER NOT NULL,
    "cuti" INTEGER NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fasilitas" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "potongan_biaya" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Fasilitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FasilitasToPegawai" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_email_key" ON "Pegawai"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_FasilitasToPegawai_AB_unique" ON "_FasilitasToPegawai"("A", "B");

-- CreateIndex
CREATE INDEX "_FasilitasToPegawai_B_index" ON "_FasilitasToPegawai"("B");

-- AddForeignKey
ALTER TABLE "_FasilitasToPegawai" ADD CONSTRAINT "_FasilitasToPegawai_A_fkey" FOREIGN KEY ("A") REFERENCES "Fasilitas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FasilitasToPegawai" ADD CONSTRAINT "_FasilitasToPegawai_B_fkey" FOREIGN KEY ("B") REFERENCES "Pegawai"("id") ON DELETE CASCADE ON UPDATE CASCADE;
