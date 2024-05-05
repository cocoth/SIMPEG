import { DataTable } from "@/components/tables/DataTable";
import { columnsAbsensi } from "@/components/tables/ColumsAbsensi";
import { Button } from "@/components/ui/button";
import { data } from "../data-pegawai/data";

const AbsensiPage = async () => {
  // const url = process.env.BASE_URL;
  const res = await fetch(`https://pf189nf4-3000.asse.devtunnels.ms/api`);
  const resJson = await res.json();
  return (
    <main className="container mx-auto py-4">
      <div className="flex text-black">
        <h1 className="font-semibold text-xl">Absensi</h1>
      </div>
      <div className="flex justify-end mt-2 ">
        <Button>Upload</Button>
      </div>
      <div className="mt-2 px-4 py-4 border border-1 border-black rounded shadow-md">
        <DataTable columns={columnsAbsensi} data={data} />
      </div>
    </main>
  );
};

export default AbsensiPage;
