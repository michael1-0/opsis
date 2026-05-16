import { prisma } from "../db/prisma.js";

async function getHealth(req, res, next) {
  try {
    const users = await prisma.user.findMany();
    res.json({ status: "ok", users: users.slice(0, 5) });
  } catch (error) {
    next(error);
  }
}

export { getHealth };
