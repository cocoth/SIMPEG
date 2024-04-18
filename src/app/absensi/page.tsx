import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/DataTable";
import { data } from "../data-pegawai/data";

const AbsensiPage = () => {
  return (
    <main className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </main>
  );
};

export default AbsensiPage;
