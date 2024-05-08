'use client'
import React from 'react'
import {Button} from '@/components/ui/button'
import { downloadDataExcel } from '@/utils/dataToExcel'

const DownloadDataPegawai = () => {
  const handleDownlad = async ()=>{
    try {
        const excelBlob = await downloadDataExcel()
        const url = window.URL.createObjectURL(excelBlob)
        const a = document.createElement('a')
        a.href = url 
        a.download = 'Data-Pegawai.xlsx'
        a.click()    
        window.URL.revokeObjectURL(url)
        
    } catch (error) {
        console.error('error downloading excel file!')
    }
  }

  return (
    <div>
      <Button
      onClick={handleDownlad}
      >
        Download Data
      </Button>
    </div>
  )
}

export default DownloadDataPegawai