import { DataTable } from "@/components/tables/DataTable";
import { columnsAbsensi } from "@/components/tables/ColumsAbsensi";

const AbsensiPage = async () => {
  // const url = process.env.BASE_URL;
  const res = await fetch(`https://pf189nf4-3000.asse.devtunnels.ms/api`);
  const resJson = await res.json();
  return (
    <main className="container mx-auto py-4">
      <div className="text-black flex">
        <h1 className="font-semibold text-xl">Absensi</h1>
      </div>
      <DataTable columns={columnsAbsensi} data={resJson} />
    </main>
  );
};

export default AbsensiPage;
