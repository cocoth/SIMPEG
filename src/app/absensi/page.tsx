import { DataTable } from "@/components/tables/DataTable"
import { columnsAbsensi } from "@/components/tables/ColumsAbsensi"


const AbsensiPage = async () => {
    const url = process.env.BASE_URL
    const res = await fetch(`${url}/api`)
    const resJson = await res.json()

    return (
        <main className="container mx-auto py-10">
           <DataTable columns={columnsAbsensi} data={resJson}/>
        </main>
    )
}

export default AbsensiPage