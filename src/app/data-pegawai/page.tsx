import { Button } from "@/components/ui/button";
import { data } from "./data";

// Data Table
import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/DataTable";

export default function Home() {
  return (
    <main>
      <section className="px-2 py-3 bg-[#f8f9fe]">
        <div className="bg-white flex flex-col shadow-md border-2 rounded-lg border-blue-500  ">
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
        </div>
        <div className="bg-white my-4 flex flex-col shadow-md border-2 border-blue-500 rounded-lg">
          <div className="overflow-x-auto mx-3 my-3">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}
