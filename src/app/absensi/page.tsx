import { DataTable } from "@/components/tables/DataTable";
import { columnsAbsensi } from "@/components/tables/ColumsAbsensi";
import { useEffect } from "react";

const AbsensiPage = async () => {
  // const url = process.env.BASE_URL;
  const res = await fetch(`https://pf189nf4-3000.asse.devtunnels.ms/api`);
  const resJson = await res.json();
  console.log(resJson);
  return (
    <main className="container mx-auto py-10">
      <DataTable columns={columnsAbsensi} data={resJson} />
    </main>
  );
};

export default AbsensiPage;
