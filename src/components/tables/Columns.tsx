"use client";
import { ColumnDef } from "@tanstack/react-table";
import { dataPegawai } from "../../../type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

export const columns: ColumnDef<dataPegawai>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "no",
    header: () => <div className="text-center"> No </div>,
    cell: ({ row }) => {
      const nomer = parseFloat(row.getValue("no"));
      return <div className="text-center font-medium">{nomer}</div>;
    },
  },
  {
    accessorKey: "nama",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
          <div>dasdsa</div>
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   const name = row.original.nama;
    //   const handlelink = () => {};
    //   return <div onClick={() => nama}>{name}</div>;
    // },
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "no_telp",
    header: "No.Telp",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const isActive = status === "Aktif" ? "text-green-500" : "text-red-600";
      return <p className={isActive}>{status}</p>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;
      const copyItem = [
        {
          title: "Copy Name",
          opt: data.nama,
          link: "/detail-pegawai",
        },
        {
          title: "Copy Email",
          opt: data.email,
        },
        {
          title: "Copy No.Telp",
          opt: data.no_telp,
        },
      ];
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {copyItem.map((item, i) => (
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(item.opt)}
                className="">
                {item.title}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
