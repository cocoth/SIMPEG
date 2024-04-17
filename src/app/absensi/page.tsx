<<<<<<< HEAD
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
=======
import { columns } from "@/components/tables/Columns"
import { DataTable } from "@/components/tables/DataTable"
import { data } from "../data-pegawai/data"


const AbsensiPage = () => {
    return (
        <main className="container mx-auto py-10">
           <DataTable columns={columns} data={data}/>
        </main>
    )
}
>>>>>>> 00dbc2a (add reusable features Table Component)

export default AbsensiPage;
