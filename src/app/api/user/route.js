import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let result = await prisma.users.findMany();
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
    let result = await prisma.users.create({
      data: {
        firstName: "Inzamamul",
        middleName: "Karim",
        lastName: "Shimul",
        mobile: "01737242772",
        email: "ikshimuluits@gmail.com",
        password: "123",
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let result = await prisma.users.update({
      where: {
        id: 1,
      },
      data: {
        firstName: "Inzamamul",
        middleName: "Karim",
        lastName: "Shimul",
        mobile: "01551808090",
        email: "ikshimuluits@gmail.com",
        password: "123",
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let result = await prisma.users.delete({
      where: {
        id: 1,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
