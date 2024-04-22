"use client";
import { useRouter } from "next/navigation";

// Data Table
import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/DataTable";
import { data } from "./data";
export default function Home() {
  const router = useRouter();
  // const path = usePathname();
  const handleCellClick = (cell: any) => {
    const id = cell.row.original;
    console.log(id);
    router.push(`/details/pegawai?id=${id}`);
  };

  // const fetchData = async () => {
  //   const res = await fetch("https://pf189nf4-3000.asse.devtunnels.ms/api");
  //   return res.json();
  // };
  // const datas = fetchData();
  return (
    <main>
      <section className="px-2 py-3 bg-[#f8f9fe]">
        <div className="bg-white my-4 flex flex-col shadow-md border-2 border-blue-500 rounded-lg">
          <div className="overflow-x-auto mx-3 my-3">
            <DataTable
              columns={columns}
              data={data}
              onClick={handleCellClick}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
