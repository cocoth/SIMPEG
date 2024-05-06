import { Pegawai, PrismaClient } from "@prisma/client"
// const url = process.env.BASE_URL
export const getDataPegawai = async (url: string)=>{
    try{
        const res = await fetch(url)
        const resJson =  await res.json()
        return resJson
    }catch(error){
        console.error("Error to fetching data: ", error)
    }

}