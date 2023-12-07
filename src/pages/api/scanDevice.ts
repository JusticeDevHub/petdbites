import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { type DeviceType } from "../../utils/dbSchemaTypes";

const scanDevice = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  try {
    const bodyParsed = z.object({ scannedData: z.string() }).parse(req.body);
    const prisma = new PrismaClient();
    const resp: z.infer<typeof DeviceType>[] = await prisma.devices.findMany({
      where: {
        id: bodyParsed.scannedData,
      },
    });

    if (resp.length > 0) {
      await prisma.devices.update({
        where: {
          id: bodyParsed.scannedData,
        },
        data: {
          connected: true,
          email: session?.user?.email || "",
        },
      });
    }

    res.status(200).json(resp);
  } catch {
    res.status(200).json("-");
  }
};

export default scanDevice;
