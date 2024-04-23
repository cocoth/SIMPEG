import React from "react";

import CardDataPegawai from "@/components/card/CardDataPegawai";
import CardDataGaji from "@/components/card/CardDataGaji";

const TambahPegawaiPage = () => {
  return (
    <main className="">
      <section className="container rounded-xl">
        <h1 className="font-bold font-ubuntu text-xl">Management Pegawai</h1>
        <div className="space-y-8">
          <CardDataPegawai />
          <CardDataGaji />
        </div>
      </section>
    </main>
  );
};

export default TambahPegawaiPage;
