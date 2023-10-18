import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    // let result = await prisma.carts.findMany();
    const result = await prisma.carts.groupBy({
      by: ["user_id"],
      _count: { email: true },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let createCart = prisma.carts.create({
      data: {
        users: {
          connect: {
            id: 1,
          },
        },
        title: "Mobile",
        sessionId: "sjdhasdh-sakdhasd-asdjoaisds",
        token: "sdsugdahsdiusmndjasdiskydrw87elaspjdsmbsdjt",
        firstName: "Inzamamul",
        middleName: "karim",
        lastName: "shimul",
        mobile: "01737242772",
        email: "ik@gmail.com",
        city: "Dhaka",
        country: "BD",
      },
    });
    const result = await prisma.$transaction([createCart]);
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
