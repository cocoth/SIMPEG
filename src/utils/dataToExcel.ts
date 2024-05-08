"use client";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";

export const generateTemplateExcel = (): Blob => {
  const headers = [
    "nama",
    "gender",
    "alamat",
    "email",
    "no_telp",
    "jabatan",
    "tanggal_lahir",
    "foto_profile",
    "status",
    "tanggal_masuk",
    "gaji_pokok",
    "tunjangan",
    "potongan_gaji",
    "kehadiran",
    "cuti",
  ];
  const data: any[] = [headers];
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Template Pegawai");
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  return new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocuments.spreadsheetml.sheet",
  });
};

export const downloadDataExcel = async (): Promise<Blob> => {
    try{
        const res = await fetch("/api/v1/pegawai")
        const resJson = await res.json()
        const worksheet = XLSX.utils.json_to_sheet(resJson);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data-Pegawai");
        const excelBuffer = XLSX.write(workbook, {
          bookType: "xlsx",
          type: "array",
        });
        return new Blob([excelBuffer], {
          type: "application/vnd.openxmlformats-officedocuments.spreadsheetml.sheet",
        });
        

    } catch(error){
        console.error("Error fetching data:", error);
        throw error
      }

};
