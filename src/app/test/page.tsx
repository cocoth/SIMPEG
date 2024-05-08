'use client'
import DownloadDataPegawai from '@/components/download-something/DownloadDataPegawai'
import DownloadTemplateExcel from '@/components/download-something/DownloadTemplateExcel'
import { columns } from '@/components/tables/Columns'
import { DataTable } from '@/components/tables/DataTable'
import UploadCSV from '@/components/upload-CSV/UploadCSV'
import React, { useState } from 'react'

const PageTesting = () => {
    const [dataFile, setDataFile] = useState<any[]>([])
    const handleUpload = (data: any[]) => {
        setDataFile(data)
    }
    return (
        <main>
            <div className="flex justify-end gap-4">
                <DownloadTemplateExcel/>
                <DownloadDataPegawai/>
            </div>
            <div className='flex flex-col justify-center items-center min-h-screen '>
                <UploadCSV onUpload={handleUpload} />
                {dataFile.length > 0 && <DataTable columns={columns} data={dataFile} />}
            </div>
        </main>
    )
}

export default PageTesting