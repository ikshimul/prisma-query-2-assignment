import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let result = await prisma.products.findMany();
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
    // let result = await prisma.products.create({
    //   data: {
    //     users: {
    //       connect: {
    //         id: 1,
    //       },
    //     },
    //     firstName: "Macbook Air M2",
    //     metaTitle: "Test meta",
    //     slug: "mackbook-air",
    //     summary: "mackbook-air",
    //     price: 1100,
    //     discount_price: 1050,
    //   },
    // });

    const createProduct = prisma.products.create({
      data: {
        users: {
          connect: {
            id: 1,
          },
        },
        firstName: "Macbook Air M2",
        metaTitle: "Test meta",
        slug: "mackbook-air",
        summary: "mackbook-air",
        price: 1100,
        discount_price: 1050,
      },
    });

    const createProductMeta = prisma.product_meta.create({
      data: {
        products: {
          connect: {
            id: 1,
          },
        },
        key: "color",
        content: "MatBlack",
      },
    });

    const createProductReview = prisma.product_review.create({
      data: {
        products: {
          connect: {
            id: 1,
          },
        },
        title: "Nice",
        rating: "5",
        content: "test",
      },
    });

    const result = await prisma.$transaction([
      createProduct,
      createProductMeta,
      createProductReview,
    ]);

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
