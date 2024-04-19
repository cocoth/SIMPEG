import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/DataTable";
import { data } from "../data-pegawai/data";
import axios from "axios";

const AbsensiPage = async () => {
  const fetchData = await axios.get(
    "https://pf189nf4-3000.asse.devtunnels.ms/api"
  );
  return (
    <main className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </main>
  );
};

export default AbsensiPage;
