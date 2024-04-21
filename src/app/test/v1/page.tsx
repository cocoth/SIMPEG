import { useCalculateSalary, useCalculateTunjangan } from '@/utils/calulate'
import { rupiah } from '@/utils/rupiah'

type data = {
    gaji_pokok: number,
    potongan_gaji: number,
    fasilitas: {
        nama: string,
        potongan_biaya: number,
    }[]
} | null

const Pagev1 = async () => {
    const pegawai = await useCalculateSalary(1)
    const tunjangan = await useCalculateTunjangan(1, 2)
    if (!pegawai||!tunjangan) return null
    const { gaji_pokok, potongan_gaji, fasilitas } = pegawai
    console.log({ gaji_pokok, potongan_gaji, fasilitas })
    console.log(rupiah(tunjangan))
    console.log(rupiah(gaji_pokok))
    return (
        <div>
            iki contoh potongan gaji
            <p>
                gaji pokok: {rupiah(gaji_pokok)}
            </p>
            <p>
                potongan gaji: {rupiah(potongan_gaji)}
            </p>
            <div>
                fasilitas: {fasilitas.map((item, i) => (
                    <div key={i}>
                        nama: {item.nama}
                        <p>
                            potongan: {item.potongan_biaya}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pagev1