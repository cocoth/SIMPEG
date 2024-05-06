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
import { Pegawai } from "@prisma/client";

export const columns: ColumnDef<Pegawai>[] = [
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
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          No
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const nomer = row.index + 1
      return <div className="text-center font-medium">{nomer}</div>;
    },
  },
  {
    accessorKey: "nama",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc"
      return (
        <Button
          variant={"ghost"}
          onClick={() => {
            column.toggleSorting(!isAsc)
          }
          }>
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
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
    accessorKey: "jabatan",
    header: "Jabatan",
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
    accessorKey: "status",
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status
      const lowerStatus = status.toLowerCase()
      const color = lowerStatus === 'aktif' ? 'text-green-500' :
        lowerStatus === 'tidak aktif' ? 'text-red-500' :
          lowerStatus === 'cuti' && 'text-blue-500'
      return (
        <div className={`${color}`}>
          {lowerStatus}
        </div>
      )
    }
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
