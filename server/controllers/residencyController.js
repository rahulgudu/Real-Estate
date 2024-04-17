import asyncHandler from "express-async-handler";

import { prisma } from "../config/config.js";

// create a new residency
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilites,
    image,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilites,
        image,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({ message: "Residency Created", residency });
  } catch (error) {
    if (error.code === "P2002") {
      throw new Error("A residency with address already there");
    } else {
      throw new Error(error.message);
    }
  }
});

//get all residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

// get the specific residency
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });
    res.send(residency);
  } catch (error) {
    throw new Error(err.message);
  }
});