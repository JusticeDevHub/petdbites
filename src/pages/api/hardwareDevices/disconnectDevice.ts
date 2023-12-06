import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]";

const disconnectDevice = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  try {
    const prisma = new PrismaClient();
    await prisma.devices.updateMany({
      where: { email: session?.user?.email || "", id: req.body.device.id },
      data: {
        email: "",
        connected: false,
      },
    });

    res.status(200).json("ok");
  } catch {
    res.status(200).json("");
  }
};

export default disconnectDevice;
