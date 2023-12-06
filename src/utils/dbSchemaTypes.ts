import { z } from "zod";

export const DeviceType = z.object({
  id: z.string(),
  email: z.string(),
  deviceName: z.string(),
  connected: z.boolean(),
});
