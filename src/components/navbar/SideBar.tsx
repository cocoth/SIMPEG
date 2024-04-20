"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosPeople } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useState } from "react";

const SideBar = () => {
  const [isOnline, setIsOnline] = useState(true);
  const path = usePathname();
  const items = [
    {
      icon: <AiFillDashboard />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <IoMdCheckmarkCircleOutline />,
      title: "Absensi",
      link: "/absensi",
    },
    {
      icon: <MdGroups />,
      title: "Pegawai",
      link: "/data-pegawai",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Kalkulasi Gaji",
      link: "/kalkulasi",
    },
    {
      title: "Manage Pegawai",
      link: "/manage-pegawai",
    },
  ];

  return (
    <aside className="min-h-screen w-1/5 bg-preset-main">
      <section className="flex flex-col justify-center font-ubuntu px-2">
        <div className="flex items-center gap-2 font-bold text-2xl text-white mx-4 my-2 py-2 text-center">
          <IoIosPeople className="text-3xl mr-2" />
          <Link href={`/`}>SIMPEG</Link>
        </div>
        <div className="h-[1px] w-full bg-white " />
        <div className="flex py-3 px-2">
          <div className="border-1 rounded-full w-16 h-16">
            <img
              src="/next.svg"
              className="border rounded-full w-full h-full "
              alt="_none"
            />
          </div>
          <div className="flex flex-col justify-center ml-4 font-poppins text-white">
            <h1 className="leading-4">Admin</h1>
            <div className="flex justify-center items-center">
              <i
                className={`bg-${
                  isOnline ? "green-500" : "red-500"
                } w-2 h-2 rounded-full`}
              />
              <h2 className="ml-1 text-xs">
                {isOnline ? "Online" : "Offline"}
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row gap-1 w-full capitalize text-white ">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`flex items-center py-2 px-2 hover:bg-preset-mainVisbilty rounded-2xl ${
                path === item.link ? "bg-[#31363F] text-preset " : "text-white"
              }`}>
              {item.icon}
              <div className="ml-2 font-poppins text-[14px] ">{item.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
