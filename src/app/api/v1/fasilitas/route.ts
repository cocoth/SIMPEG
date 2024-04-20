import { NextRequest, NextResponse } from "next/server";
import { Fasilitas, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const res = await prisma.fasilitas.findMany({});
    return NextResponse.json(res, {status: 200});
  } catch (error) {
    return NextResponse.json('failed to get data!', {status: 404})
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body: Fasilitas = await req.json();
    const { nama, potongan_biaya } = body;
    const fasilitas = await prisma.fasilitas.create({
      data: {
        nama,
        potongan_biaya,
      },
    });
    return NextResponse.json(fasilitas, {status: 201});
  } catch (error) {
    return NextResponse.json('POST data error!', {status: 404})
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const body: Fasilitas = await req.json();
    const fasilitas = await prisma.fasilitas.delete({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json(fasilitas, {status: 204});
  } catch (error) {
    return NextResponse.json('error to delete!', {status: 404})
  }
};
