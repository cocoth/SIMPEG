'use client'
import { columns } from '@/components/tables/Columns'
import { DataTable } from '@/components/tables/DataTable'
import UploadCSV from '@/components/upload-CSV/UploadCSV'
import React, { useState } from 'react'

const PageTesting = () => {
    const [dataFile, setDataFile] = useState<any[]>([])
    const handleUpload = (data: any[])=>{
        setDataFile(data)
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen '>
        <UploadCSV onUpload={handleUpload}/>
        {/* {dataFile.length> 0 && <DataTable  columns={columns} data={dataFile}/>} */}
    </div>
  )
}

export default PageTesting