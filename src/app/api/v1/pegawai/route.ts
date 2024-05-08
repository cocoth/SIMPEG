import { NextRequest, NextResponse } from "next/server";
import { Pegawai, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const res = await prisma.pegawai.findMany({
      include: {
        fasilitas: true,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: "failed to get data!" }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body: Pegawai = await req.json();
    const pegawai = await prisma.pegawai.create({
      data: { ...body },
    });
    return NextResponse.json(pegawai, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "POST data error!" }, { status: 500 });
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const body: Pegawai = await req.json();
    const { id } = body;
    const pegawai = await prisma.pegawai.update({
      where: { id },
      data: {
        ...body,
      },
    });
    return NextResponse.json(pegawai, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "PATCH data error!" }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const body: Pegawai = await req.json();
    const { id } = body;
    const pegawai = await prisma.pegawai.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(pegawai, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: "error to delete!" }, { status: 500 });
  }
};
