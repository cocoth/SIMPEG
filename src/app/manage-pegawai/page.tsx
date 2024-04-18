import { DataTable } from '@/components/tables/DataTable'
import React from 'react'
import { data } from '../data-pegawai/data'
import { columns } from '@/components/tables/Columns'

const TambahPegawaiPage = () => {
  return (
    <main className='m-3'>
      <section>
        <h1 className="font-bold font-ubuntu text-xl">
          Management Pegawai
        </h1>
      </section>
      <section className="container rounded-xl">
        <DataTable data={data} columns={columns} />
      </section>
    </main>
  )
}

export default TambahPegawaiPage