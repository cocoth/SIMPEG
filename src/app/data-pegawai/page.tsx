import { Button } from "@/components/ui/button";
import { data } from "./data";

// Data Table
import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/DataTable";

export default function Home() {
  return (
    <main>
      <section className="px-2 py-3 bg-[#f8f9fe]">
        {/* <div className="bg-white flex flex-col shadow-md border-2 rounded-lg border-blue-500  ">
          <div className="flex flex-col mx-3 my-3">
            <div className="flex justify-between">
              <div className="px-3 py-1">
                <h3 className="text-md font-ubuntu font-bold text-blue-500 tracking-wide">
                  List Pegawai
                </h3>
              </div>
              <Button className="bg-blue-700 px-3 py-1 text-md font-ubuntu font-semibold text-white tracking-wide cursor-pointer rounded-sm">
                Add
              </Button>
            </div>
            <div className="px-3 py-1">
              <label htmlFor="search" className="font-poppins text-light">
                Search :
              </label>
              <input
                type="search"
                className="relative bg-[#f8f9fe] bg- mb-0 -mr-0.5 w-2/5 block flex-auto rounded-md border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
        </div> */}
        <div className="bg-white my-4 flex flex-col shadow-md border-2 border-blue-500 rounded-lg">
          <div className="overflow-x-auto mx-3 my-3">
<<<<<<< HEAD
            <DataTable columns={columns} data={data} />
=======
            <table className="table-fixed w-full text-left">
              <thead className="bg-white">
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Gender</th>
                  <th className="px-4 py-2">No.Telp</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="bg-gray-100">
                    <td className="px-4 py-2">{item.no}</td>
                    <td className="px-4 py-2">{item.nama}</td>
                    <td className="px-4 py-2">{item.gender}</td>
                    <td className="px-4 py-2">{item.no_telp}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">{item.status}</td>
                    <td className="px-4 py-2">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white rounded ml-2">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
>>>>>>> 00dbc2a (add reusable features Table Component)
          </div>
        </div>
      </section>
    </main>
  );
}
