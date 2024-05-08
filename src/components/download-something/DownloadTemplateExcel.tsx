'use client'
import React from 'react'
import {Button} from '@/components/ui/button'
import { generateTemplateExcel } from '@/utils/dataToExcel'

const DownloadTemplateExcel = () => {
  const handleDownlad = ()=>{
    const excelBlob = generateTemplateExcel()
    const url = window.URL.createObjectURL(excelBlob)
    const a = document.createElement('a')
    a.href = url 
    a.download = 'Template-Pegawai.xlsx'
    a.click()    
    window.URL.revokeObjectURL(url)
  }

  return (
    <div>
      <Button
      onClick={handleDownlad}
      >
        Download Template
      </Button>
    </div>
  )
}

export default DownloadTemplateExcel