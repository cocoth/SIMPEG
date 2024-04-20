import { Input } from '@/components/ui/input'
import React from 'react'

const dataInput = [
    'nama',
    'gender',
    'alamat',
    'email',
    'no.telp',
    'jabatan',
    'status',
    'gaji pokok',
    'tunjangan',
    'potongan gaji',
    'kehadiran',
    'cuti',

]


const PageV1 = () => {
    return (
        <div>
            <section>
                <h1>
                    Tambah data
                </h1>
            </section>
            <section>
                <form method="post">
                    {dataInput.map((item, i) => (
                        <React.Fragment key={i}>    
                            <label htmlFor={`input-${item}`}>{item}</label>
                            <Input id={`input-${item}`} placeholder={item} name={item} />
                        </React.Fragment>
                        
                    ))}


                </form>
            </section>
        </div>
    )
}

export default PageV1