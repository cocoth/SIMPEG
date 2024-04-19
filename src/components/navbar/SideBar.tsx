"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosPeople } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const SideBar = () => {
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
    <aside className="min-h-screen w-[234px] bg-preset">
      <section className="flex flex-col justify-center font-ubuntu">
        <div className="flex items-center gap-2 font-bold text-2xl text-white mx-4 my-2 py-2 text-center">
          <IoIosPeople className="text-2xl" />
          <Link href={`/`}>SIMPEG</Link>
        </div>
        <div className="h-[1px] w-full bg-white" />
        <div className="grid grid-flow-row w-full  capitalize text-white ">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`flex items-center py-2 px-4 hover:bg-gray-200 hover:text-preset border-y-[1px] ${
                path === item.link ? "bg-white text-preset " : "text-white"
              }`}>
              {item.icon}
              <div className="ml-2 font-ubuntu ">{item.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
