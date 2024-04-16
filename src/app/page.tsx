import Navbar from "@/components/navbar/Navbar";
import SideBar from "@/components/navbar/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex">
        <SideBar />
        <Navbar />
      </section>
    </main>
  );
}
