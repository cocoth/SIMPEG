import { Button } from "@/components/ui/button";
import { data } from "./data";

// Data Table
import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/DataTable";

export default function Home() {
  return (
    <main>
      <section className="px-2 py-3 bg-[#f8f9fe]">
        <div className="bg-white my-4 flex flex-col shadow-md border-2 border-blue-500 rounded-lg">
          <div className="overflow-x-auto mx-3 my-3">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}
