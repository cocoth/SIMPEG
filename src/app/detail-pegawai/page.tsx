"use client";
import { useState } from "react";
import { dataPegawai } from "../../../type";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DetailPegawai = () => {
  const [activeLink, setActiveLink] = useState("Personal-Data");

  return (
    <main>
      <section className="px-4 py-4 bg-[#f8f9fe]">
        <div className="overflow-x-auto mb-4">
          <h1 className="font-sans font-bold text-xl">Detail Pegawai</h1>
        </div>
        <div className="flex justify-between w-full max-h-max">
          <div className="w-2/6 h-screen">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle className="text-center">Nama Pegawai</CardTitle>
                <CardDescription className="text-center">
                  Pegawai
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-2">
                    <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                      <h1 className="text-xs font-poppins">Nama</h1>
                      <h1 className="text-md font-poppins">Sutejo</h1>
                    </div>
                    <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                      <h1 className="text-xs font-poppins">Gender</h1>
                      <h1 className="text-md font-poppins">Laki-Laki</h1>
                    </div>
                    <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                      <h1 className="text-xs font-poppins">Status</h1>
                      <h1 className="text-md font-poppins">Aktif</h1>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Edit Profil</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-4/6 bg-[#f8f9fe] ml-4">
            <div className="flex justify-evenly">
              <div
                onClick={() => setActiveLink("Personal-Data")}
                className={`cursor-pointer ${
                  activeLink === "Personal-Data"
                    ? "underline underline-offset-4 inline-block border-b border-blue-300"
                    : ""
                }`}>
                Personal Data
              </div>
              <div
                onClick={() => setActiveLink("Slip-Gaji")}
                className={`cursor-pointer ${
                  activeLink === "Slip-Gaji"
                    ? "underline underline-offset-4 inline-block border-b border-blue-300"
                    : ""
                }`}>
                Slip Gaji
              </div>
            </div>
            {activeLink === "Personal-Data" && (
              <Card className="w-full mt-2">
                <CardHeader>
                  <CardTitle className="text-center">Personal Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-2">
                      <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                        <h1 className="text-[8px] font-poppins">Full Name</h1>
                        <h1 className="text-md font-poppins">Sutejo</h1>
                      </div>
                      <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                        <h1 className="text-xs font-poppins">Gender</h1>
                        <h1 className="text-md font-poppins">Laki-Laki</h1>
                      </div>
                      <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                        <h1 className="text-xs font-poppins">Status</h1>
                        <h1 className="text-md font-poppins">Aktif</h1>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>Edit Profil</Button>
                </CardFooter>
              </Card>
            )}
            {activeLink === "Slip-Gaji" && (
              <Card className="w-[350px] mt-2">
                <CardHeader>
                  <CardTitle className="text-center">Personal Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-2">
                      <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                        <h1 className="text-xs font-poppins">Nama</h1>
                        <h1 className="text-md font-poppins">Sutejo</h1>
                      </div>
                      <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                        <h1 className="text-xs font-poppins">Gender</h1>
                        <h1 className="text-md font-poppins">Laki-Laki</h1>
                      </div>
                      <div className="flex flex-col bg-[#f8f9fe] px-2 py-2 rounded-sm">
                        <h1 className="text-xs font-poppins">Status</h1>
                        <h1 className="text-md font-poppins">Aktif</h1>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>add Profil</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailPegawai;
