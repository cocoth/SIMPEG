"use client";
import { ColumnDef } from "@tanstack/react-table";
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
import { useState } from "react";
import AddPegawai from "../absen/AddAbsen";
import EditPegawai from "../absen/EditPegawai";
import { dataPegawai } from "../../../type";

export const columnsAbsensi: ColumnDef<dataPegawai>[] = [
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
    accessorKey: "id",
    header: () => <div className="text-center"> No </div>,
    cell: ({ row }) => {
      const nomer = parseFloat(row.getValue("id"));
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
        </Button>
      );
    },
  },
  {
    accessorKey: "jabatan",
    header: "Jabatan",
  },
  {
    header: "Kehadiran",
    cell: ({ row }) => {
      const kehadiran = row.original.kehadiran;
      const isActive =
        kehadiran === "hadir"
          ? "text-green-500"
          : kehadiran === "terlambat"
          ? "text-blue-500"
          : kehadiran === "izin"
          ? "text-white"
          : "text-red-500";
      return <p className={isActive}>{kehadiran}</p>;
    },
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;
      const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
      const [modalContent, setModalContent] = useState<JSX.Element | null>(
        null
      );
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const handleActionClick = (action: string) => {
        if (action === "Add") {
          setModalContent(<AddPegawai />);
        } else if (action === "Edit") {
          setModalContent(<EditPegawai />);
        }
        setIsModalOpen(true);
      };

      const copyItem = [
        {
          title: "Hadir",
          opt: data.nama,
        },
        {
          title: "Terlambat",
          opt: data.email,
        },
        {
          title: "Izin",
          opt: data.email,
        },
        {
          title: "Cuti",
          opt: data.email,
        },
      ];
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <MoreHorizontal className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Kehadiran</DropdownMenuLabel>
              {copyItem.map((item, i) => (
                <DropdownMenuItem
                  onClick={() => handleActionClick(item.title)}
                  className="cursor-pointer">
                  {item.title}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
          {isModalOpen && <div onClick={handleCloseModal}>{modalContent}</div>}
        </>
      );
    },
  },
];
