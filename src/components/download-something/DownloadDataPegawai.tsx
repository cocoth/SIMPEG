'use client'
import React, { Suspense, useState } from 'react'
import { Button } from '@/components/ui/button'
import { downloadDataExcel } from '@/utils/dataToExcel'
import { FaDownload, FaLastfmSquare } from 'react-icons/fa'
import { IoReload } from 'react-icons/io5'

const DownloadDataPegawai = () => {
  const [loader, setLoader] = useState(false)
  const handleDownlad = async () => {
    try {
      setLoader(true)
      const excelBlob = await downloadDataExcel()
      const url = window.URL.createObjectURL(excelBlob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Data-Pegawai.xlsx'
      a.click()
      window.URL.revokeObjectURL(url)
      setLoader(false)
    } catch (error) {
      console.error('error downloading excel file!')
    }
  }

  return (
    <div>
      <Button
        onClick={handleDownlad}
        className='flex justify-center items-center'
      >
        {loader ? (
          <React.Fragment>
            <p className='mr-2'>
              loading...
            </p>
            <IoReload className='animate-spin duration-700' />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p className='mr-2'>
              Download Data
            </p>
            <FaDownload />
          </React.Fragment>
        )}
      </Button>
    </div>
  )
}

export default DownloadDataPegawai