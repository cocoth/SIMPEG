import React from "react";
import { data } from "@/app/data-pegawai/data";

const Navbar = () => {
  return (
    <nav className=" w-full h-max bg-white shadow-sm shadow-gray-800  ">
      <section className="mx-8 py-2 flex items-center justify-between">
        <h1 className="font-bold font-ubuntu text-preset-mainVisbilty text-2xl py-2 ">
          Sistem Informasi Pegawai
        </h1>
        <div className="flex px-2">
          <div className="flex flex-col justify-center ml-4 font-poppins text-black">
            <div className="flex justify-center items-center mr-2">
              <h2 className="ml-1 text-xs">
                {data.length > 0 ? data[0].nama : "none"}
              </h2>
            </div>
          </div>
          <div className="border-1 rounded-full w-8 h-8">
            <img
              src="/next.svg"
              className="border rounded-full w-full h-full "
              alt="_none"
            />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
