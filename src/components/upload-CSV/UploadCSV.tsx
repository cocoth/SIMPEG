import { CSVReader } from '@/utils/fileCSVReader'
import { Input } from '@/components/ui/input'
import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const UploadCSV: React.FC<{ onUpload: (data: any[]) => void }> = ({ onUpload }) => {
    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = async () => {
        if (!file) return
        try {
            const data = await CSVReader(file)
            onUpload(data)
        } catch (error) {
            console.error('Error reading file, ', error)
        }
    }
    const handleButtonClick = () => {
        fileInputRef.current?.click()
    }
    return (
        <div className='cursor-pointer'>
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
                        Upload
                    </Button>
                    <p>only .csv file accepted!</p>
                </div>

            </section>
        </div>
    )
}

export default UploadCSV