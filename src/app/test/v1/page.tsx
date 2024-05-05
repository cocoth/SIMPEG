import { calculateAllowance, calculateAttendance, calculateSalary } from '@/utils/calulate'
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
    const pegawai = await calculateSalary(1)
    const tunjangan = await calculateAllowance(1, 2)
    const kehadiran = await calculateAttendance(1, -3)
    if (!pegawai||!tunjangan) return null
    const { gaji_pokok, potongan_gaji, fasilitas } = pegawai
    console.log({ gaji_pokok, potongan_gaji, fasilitas })
    console.log(rupiah(tunjangan))
    console.log(rupiah(gaji_pokok))
    console.log(kehadiran)
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