"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosPeople } from "react-icons/io";

const SideBar = () => {
<<<<<<< HEAD
  const path = usePathname();
  const items = [
    {
      title: "Absensi",
      link: "/absensi",
    },
    {
      title: "Data Pegawai",
      link: "/data-pegawai",
    },
    {
      title: "Kalkulasi Gaji",
      link: "/kalkulasi",
    },
    {
      title: "Tambah Pegawai",
      link: "/tambah-pegawai",
    },
  ];

  return (
    <aside className="min-h-screen w-max bg-preset">
      <section className="flex flex-col justify-center mx-3 font-ubuntu">
        <div className="flex items-center gap-2 font-bold text-2xl text-white my-2 py-2">
          <IoIosPeople className="text-2xl" />
          <Link href={`/`}>SIMPEG</Link>
        </div>
        <div className="h-1 w-full bg-white rounded" />
        <div className="grid grid-flow-row w-max gap-2 my-2 capitalize text-white text-lg ">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`rounded-xl py-1 px-2 hover:bg-gray-200 hover:text-preset border ${
                path === item.link ? "bg-white text-preset " : "text-white"
              }`}>
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
=======
    const path = usePathname();
    const items = [
        {
            title: 'Absensi',
            link: '/absensi'
        },
        {
            title: 'Data Pegawai',
            link: '/data-pegawai'
        },
        {
            title: 'Kalkulasi Gaji',
            link: '/kalkulasi'
        },
        {
            title: 'Tambah Pegawai',
            link: '/tambah-pegawai'
        },
    ]

    return (
        <aside className="min-h-screen w-max bg-preset">
            <section className="flex flex-col justify-center mx-3 font-ubuntu">
                <div className="flex items-center gap-2 font-bold text-2xl text-white my-2 py-2">
                    <IoIosPeople className="text-2xl" />
                    <Link href={`/`}>SIMPEG</Link>
                </div>
                <div className="h-1 w-full bg-white rounded" />
                <div className="grid grid-flow-row w-max gap-2 my-2 capitalize text-white text-lg ">
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            href={item.link}
                            className={`rounded-xl py-1 px-2 hover:bg-gray-200 hover:text-preset border ${path === item.link
                                ? "bg-white text-preset "
                                : "text-white"
                                }`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </section>
        </aside>
    );
>>>>>>> 8969995 (add new sidebar content)
};

export default SideBar;
