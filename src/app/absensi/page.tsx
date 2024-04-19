import { columns } from "@/components/tables/Columns"
import { DataTable } from "@/components/tables/DataTable"
import { data } from "../data-pegawai/data"


const AbsensiPage = async () => {
    const url = process.env.BASE_URL
    const res = await fetch(`${url}/api`)
    const resJson = await res.json()

    return (
        <main className="container mx-auto py-10">
           <DataTable columns={columns} data={resJson}/>
        </main>
    )
}

export default AbsensiPage