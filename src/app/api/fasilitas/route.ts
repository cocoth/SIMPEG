import { NextRequest, NextResponse } from "next/server";
import { Fasilitas, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const res = await prisma.fasilitas.findMany({});
    return NextResponse.json(res);
  } catch (error) {
    throw error;
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
    return NextResponse.json(fasilitas);
  } catch (error) {
    throw error;
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
    return NextResponse.json(fasilitas);
  } catch (error) {
    return NextResponse.json("Error deleting item!");
  }
};
