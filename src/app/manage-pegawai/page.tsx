import React from "react";

import CardDataPegawai from "@/components/card/CardDataPegawai";
import CardDataGaji from "@/components/card/CardDataGaji";

const TambahPegawaiPage = () => {
  return (
    <main className="bg-[#f8f9fe] relative">
      <section className="container mx-auto py-4">
        <h1 className="font-bold mb-4 font-ubuntu text-xl">
          Management Pegawai
        </h1>
        <div className="flex flex-col gap-y-4">
          <CardDataPegawai />
          <CardDataGaji />
        </div>
      </section>
    </main>
  );
};

export default TambahPegawaiPage;
