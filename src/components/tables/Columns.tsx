"use client"
import { ColumnDef } from "@tanstack/react-table"
import { dataPegawai } from "../../../type"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { Pegawai } from "@prisma/client"

export const columns: ColumnDef<Pegawai>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
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
            const nomer = parseFloat(row.getValue("id"))
            return <div className="text-center font-medium">{nomer}</div>
        }
    },
    {
        accessorKey: "nama",
        header: ({ column }) => {
            return (
                <Button
                    variant={'ghost'}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nama
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "gender",
        header: "Gender"
    },
    {
        accessorKey: "jabatan",
        header: "Jabatan"
    },
    {
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status.toLowerCase()

            const isActive = status === 'aktif' ? 'text-green-500' :
                status === 'cuti' ? 'text-blue-500' : 'text-red-600'
            return <p className={isActive}>{status}</p>
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const data = row.original
            const copyItem = [
                {
                    title: 'Copy Name',
                    opt: data.nama
                },
                {
                    title: 'Copy Email',
                    opt: data.email
                },
                {
                    title: 'Copy No.Telp',
                    opt: data.no_telp
                },
            ]
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger
                        asChild
                        className="cursor-pointer"
                    >
                        <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                            Actions
                        </DropdownMenuLabel>
                        {copyItem.map((item, i) => (
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(item.opt)}
                                className="cursor-copy"

                            >
                                {item.title}
                            </DropdownMenuItem>

                        ))}
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
]