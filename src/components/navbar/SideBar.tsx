"use client";
import Icons from "@/components/icon/Icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@radix-ui/react-select";

const SideBar = () => {
  const [isOnline, setIsOnline] = useState(true);
  const path = usePathname();
  const items = [
    {
      icon: "Dashboard",
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: "Checkout",
      title: "Absensi",
      link: "/absensi",
    },
    {
      icon: "Groups",
      title: "Pegawai",
      link: "/data-pegawai",
      children: [
        {
          title: "Data Pegawai",
          link: "/data-pegawai",
        },
        {
          title: "Manage Pegawai",
          link: "/manage-pegawai",
        },
      ],
    },
    {
      icon: "Money",
      title: "Kalkulasi Gaji",
      link: "/kalkulasi",
    },
  ];

  return (
    <aside className="min-h-screen w-1/5 bg-preset-main">
      <section className="flex flex-col justify-center font-ubuntu px-2">
        <div className="flex items-center gap-2 font-bold text-2xl text-white mx-4 my-2 py-2 text-center">
          <Icons name="Logo" className="text-3xl mr-2" />
          <Link href={`/`}>SIMPEG</Link>
        </div>
        <div className="h-[0.5px] w-full bg-white shadow-md mb-2" />
        {items.length ? (
          <nav className="grid grid-flow-row gap-1 w-full capitalize">
            {items.map((item, index) =>
              item.children ? (
                <Accordion type="single" collapsible>
                  <AccordionItem value={item.title} className="border-b-0">
                    <AccordionTrigger
                      className={`animate-accordion-up flex text-white justify-between space-y-0 px-2 h-10 hover:bg-preset-mainVisbilty hover:no-underline rounded-lg  `}>
                      <div className={`flex items-center text-white`}>
                        {item.icon && (
                          <Icons
                            name={item.icon}
                            className="w-4 h-4 mr-2 shrink-0"
                          />
                        )}
                      </div>
                      <div className="mr-24">{item.title}</div>
                    </AccordionTrigger>
                    {/* Drop Down Style Nav */}
                    <AccordionContent>
                      <div className="ml-6 flex flex-col space-y-1">
                        {item.children.map((child, index) => (
                          <Link
                            key={index}
                            href={child.link || "/"}
                            className={`flex w-full items-center py-2 px-2 rounded-lg hover:bg-preset-mainVisbilty 
                            ${
                              path === child.link
                                ? "bg-preset-mainVisbilty text-white"
                                : "text-white"
                            } `}>
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                    {/* Drop Down Style Nav */}
                  </AccordionItem>
                </Accordion>
              ) : (
                item.link && (
                  <div className="flex">
                    <Link
                      key={index}
                      href={item.link}
                      className={`flex text-xb w-full items-center py-2 px-2 rounded-lg hover:bg-preset-mainVisbilty 
                          ${
                            path === item.link
                              ? "bg-preset-mainVisbilty text-white"
                              : "text-white"
                          } `}>
                      {item.icon && <Icons name={item.icon} className="mr-2" />}
                      {item.title}
                    </Link>
                  </div>
                )
              )
            )}
          </nav>
        ) : null}
      </section>
    </aside>
  );
};

export default SideBar;
