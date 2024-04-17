"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosPeople } from "react-icons/io";

const SideBar = () => {
  const path = usePathname();

  return (
    <aside className="bg-preset sticky min-h-screen w-max">
      <section className="flex flex-col justify-center mx-3 font-ubuntu">
        <div className="flex items-center gap-2 font-bold text-2xl text-white my-2 py-2">
          <IoIosPeople className="text-2xl" />
          <Link href={`/`}>SIMPEG</Link>
        </div>
        <div className="h-1 w-full bg-white rounded" />
        <div className="grid grid-flow-row w-max gap-2 my-2 capitalize text-white text-lg ">
          <Link
            href={`/absensi`}
            className={`rounded-xl py-1 px-2 ${
              path === "/absensi"
                ? "bg-white text-preset "
                : "border text-white"
            }`}>
            Absensi
          </Link>
          <Link
            href={`/data-pegawai`}
            className={`rounded-xl py-1 px-2 ${
              path === "/data-pegawai"
                ? "bg-white text-preset"
                : "border text-white"
            }`}>
            Data Pegawai
          </Link>
          <Link
            href={`/kalkulasi`}
            className={`rounded-xl py-1 px-2 ${
              path === "/kalkulasi"
                ? "bg-white text-preset"
                : "border text-white"
            }`}>
            Kalkulasi Gaji
          </Link>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
