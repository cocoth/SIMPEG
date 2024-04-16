import { IoIosPeople } from "react-icons/io";

const SideBar = () => {
    return (
        <aside className='bg-preset sticky min-h-screen w-max'>
            <section className='flex flex-col justify-center mx-3 font-ubuntu'>
                <div className='flex items-center gap-2 font-bold text-2xl text-white my-2'>
                    <IoIosPeople className="text-2xl" />
                    <span>
                        SIMPEG
                    </span>
                </div>
                <div className='h-1 w-full bg-white rounded' />
                <ul className='grid grid-flow-row w-max gap-2 my-2 capitalize text-white text-lg '>
                    <li className='bg-white text-preset rounded-xl py-1 px-2'>
                        absensi
                    </li>
                    <li className='bg-white text-preset rounded-xl py-1 px-2'>
                        data pegawai
                    </li>
                    <li className='bg-white text-preset rounded-xl py-1 px-2'>
                        kalkulasi Gaji
                    </li>
                </ul>

            </section>
        </aside>
    )
}

export default SideBar