"use client";
import { useRouter } from "next/navigation";

// Data Table
import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/DataTable";
import { useEffect, useState } from "react";
import { Pegawai } from '@prisma/client'
import { getDataPegawai } from "@/utils/fetchData";
// import { data } from "./data";
export default function Home() {
  const router = useRouter();
  const handleCellClick = (cell: any) => {
    const id = cell.row.original;
    console.log(id);
    router.push(`/details/pegawai?id=${id}`);
  };
  const [data, setData] = useState<Pegawai[]>([])
  const fetchData = async()=>{
    const res = await getDataPegawai('/api/v1/pegawai')
    setData(res)
  }
  useEffect(()=>{fetchData()},[])

  return (
    <main>
      <section className="bg-[#f8f9fe]">
        <div className="flex flex-col my-4 bg-white border-blue-500 rounded-lg shadow-md border-2">
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
