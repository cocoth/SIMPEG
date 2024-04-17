import React from 'react'




const AbsensiPage = () => {
    return (
        <main>
            <table className=' w-full'>
                <thead className='bg-gray-300'>
                    <tr className='capitalize'>
                        <th>Nama</th>
                        <th>Gender</th>
                        <th>No.Telp</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>supriyanto</td>
                        <td>M</td>
                        <td>0812392347312</td>
                        <td>Masuk</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default AbsensiPage