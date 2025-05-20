import z from "zod";

const step1Schema = z.object({
  name: z.string().refine((val) => val.trim() !== "", "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().refine((val) => val.trim() !== "", "Phone is required"),
});

export default step1Schema;
