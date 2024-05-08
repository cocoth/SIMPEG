import { CSVReader, CSVtoJSON } from '@/utils/fileCSVReader'
import { Input } from '@/components/ui/input'
import React, { SyntheticEvent, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'

const UploadCSV: React.FC<{ onUpload: (data: any[]) => void }> = ({ onUpload }) => {
    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = async () => {
        if (!file) return
        try {
            const data = await CSVtoJSON(file)
            if(!data) return null
            await axios.post('/api/v1/pegawai', data)
            onUpload(data)
        } catch (error) {
            console.error('Error reading file, ', error)
        }
    }
    const handleButtonClick = (e: SyntheticEvent) => {
        fileInputRef.current?.click()
    }
    return (
        <div className=''>
            <section className='py-4 px-5 w-[40dvw] min-h-[60dvh] bg-gray-200 rounded-md border border-black border-dashed '>
                <div className="flex flex-col justify-center items-center w-full h-full py-4 px-5 border-2 border-dashed rounded-md border-pink-400">
                    <p className='font-semibold text-lg font-ubuntu text-gray-700'>
                        Drag and drop your files anywhere or
                    </p>
                    <Input
                        type='file'
                        accept='.csv'
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        ref={fileInputRef}
                        multiple
                        className='hidden'
                    />
                    <Button
                        variant='outline'
                        onClick={handleButtonClick}
                        className='cursor-pointer'
                    >
                        Select
                    </Button>
                    <p>
                        {file && file.name}
                    </p>
                    <br />

                    <p>only .csv file accepted!</p>

                </div>
                <div className="flex justify-end gap-3 my-3">
                    <Button variant={'secondary'}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleFileUpload}
                    >
                        Upload
                    </Button>
                </div>
            </section>

        </div>
    )
}

export default UploadCSV