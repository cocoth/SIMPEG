"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaPen } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AlertDialogDemo } from "@/components/alert/Alert";
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
  const [isEditLink, setIsEditLink] = useState(false);
  // const id = useParams();
  const router = useRouter();
  // const searchParams = useSearchParams();

  // const id = searchParams.get("id");
  // console.log(id);

  const handleEdit = () => {
    AlertDialogDemo();
    console.log("Hai");
    // setIsEditLink(true);
    // router.push("/edit-pegawai/");
  };
  return (
    <main>
      <section className="px-4 py-4 bg-[#f8f9fe]">
        <div className="overflow-x-auto mb-4">
          <h1 className="font-sans font-bold text-xl">Detail Pegawai</h1>
        </div>
        <div className="flex justify-between w-full max-h-max">
          <div className="w-2/6 h-full">
            <Card className="w-[350px]">
              <CardHeader>
                <div className="relative flex flex-end bg-black">
                  <FaPen
                    className="text-gray-700 absolute right-0 cursor-pointer"
                    onClick={handleEdit}
                  />
                </div>
                <div className="flex relative justify-center mb-2">
                  <img
                    className="inline-block w-36 h-36 rounded-full text-center justify-center border-2"
                    src=""
                    alt="Img"
                  />
                </div>
                <CardTitle className="text-center">Nama Pegawai</CardTitle>
                <CardDescription className="text-center">
                  Pegawai
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 gap-2">
                  {[
                    { label: "NIP", value: "123456" },
                    { label: "Nama", value: "Sutejo" },
                    { label: "Gender", value: "Laki-Laki" },
                    { label: "Status", value: "Aktif" },
                    { label: "Tanggal Masuk", value: "Date Time" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex flex-col bg-[#f8f9fe] px-2 py-1 rounded-sm">
                      <h1 className="text-xs font-poppins">{label}</h1>
                      <h1 className="text-md font-poppins">{value}</h1>
                    </div>
                  ))}
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="w-4/6 bg-[#f8f9fe] ml-4 py-6">
            <div className="flex justify-evenly py-2">
              <div
                onClick={() => setActiveLink("Personal-Data")}
                className={`cursor-pointer font-poppins font-semibold text-base ${
                  activeLink === "Personal-Data"
                    ? "underline-offset-2 inline-block border-b-2 border-blue-500"
                    : ""
                }`}>
                Personal Data
              </div>
              <div
                onClick={() => setActiveLink("Slip-Gaji")}
                className={`cursor-pointer font-poppins font-semibold text-base ${
                  activeLink === "Slip-Gaji"
                    ? "underline-offset-4 inline-block border-b-2 border-blue-500"
                    : ""
                }`}>
                Slip Gaji
              </div>
            </div>
            {activeLink === "Personal-Data" && (
              <Card className="w-full mt-2">
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-left font-poppins font-semibold">
                      Personal Data
                    </CardTitle>
                    <FaPen className="" />
                  </div>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-2">
                    {[
                      { label: "Full Name", value: "Sutejo" },
                      { label: "Gender", value: "Laki-Laki" },
                      { label: "Birthday", value: "12/1/2023" },
                      { label: "Email", value: "Suprianto@gmail.com" },
                      { label: "Kota", value: "Semarang" },
                      { label: "Alamat", value: "Jl.Pedurungan" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col bg-[#f8f9fe] px-2 py-1 rounded-sm">
                        <h1 className="text-[9px] font-poppins">{label}</h1>
                        <h1 className="text-md font-poppins">{value}</h1>
                      </div>
                    ))}
                  </form>
                </CardContent>
              </Card>
            )}
            {activeLink === "Slip-Gaji" && (
              <Card className="w-full mt-2">
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-left font-poppins font-semibold">
                      Slip Gaji
                    </CardTitle>
                    <FaPen />
                  </div>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-2">
                      <div className="flex flex-col bg-[#f8f9fe] px-2 py-1 rounded-sm">
                        <h1 className="text-xs font-poppins">Gaji Pokok</h1>
                        <h1 className="text-md font-poppins">Rp. 5.000.000</h1>
                      </div>
                      <div className="w-full flex flex-col bg-[#f8f9fe] px-2 py-1 rounded-sm">
                        <h1 className="text-xs font-poppins">Tunjangan</h1>
                        <h1 className="text-md font-poppins">Hai</h1>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="w-1/2 flex flex-col bg-[#f8f9fe] px-2 py-1 rounded-sm">
                          <h1 className="text-xs font-poppins">Kehadiran</h1>
                          <h1 className="text-md font-poppins">Aktif</h1>
                        </div>
                        <div className="w-1/2 flex flex-col bg-[#f8f9fe] px-2 py-1 rounded-sm">
                          <h1 className="text-xs font-poppins">Lembur</h1>
                          <h1 className="text-md font-poppins">Aktif</h1>
                        </div>
                        <div className="w-1/2 flex flex-col bg-[#f8f9fe] px-2 py-1 rounded-sm">
                          <h1 className="text-xs font-poppins">Cuti</h1>
                          <h1 className="text-md font-poppins">Aktif</h1>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailPegawai;
