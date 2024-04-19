"use client";
import React from "react";
import { data } from "../data-pegawai/data";
import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/DataTable";
import { Calendar } from "@/components/ui/calendar";

import { CalendarForm } from "@/components/calendar/Calendar";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TambahPegawaiPage = () => {
  return (
    <main className="m-3">
      <section className="container rounded-xl">
        <h1 className="font-bold font-ubuntu text-xl mb-4">
          Management Pegawai
        </h1>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Input Data Pegawai</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 grid-cols-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="name">Nama Pegawai</Label>
                  <Input id="name" placeholder="Masukkan Nama" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Jenis Kelamin</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Laki-Laki</SelectItem>
                      <SelectItem value="sveltekit">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="alamat">Alamat</Label>
                  <Input id="alamat" placeholder="Alamat Rumah" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="no_hp">No Telephone</Label>
                  <Input id="no_hp" placeholder="Nomer Handphone" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1">
                  <CalendarForm />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Jabatan</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Junior</SelectItem>
                      <SelectItem value="sveltekit">Senior</SelectItem>
                      <SelectItem value="astro">Manager</SelectItem>
                      <SelectItem value="nuxt">Consultan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="no_rek">No Rekening</Label>
                  <Input id="no_rek" placeholder="No rek" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default TambahPegawaiPage;
