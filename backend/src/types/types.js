import { z } from "zod";

export const addUserSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	phone: z.string().min(10),
})

export const updateUserSchema = z.object({
	name: z.string().min(3).optional(),
	email: z.string().email().optional(),
	phone: z.string().min(10).optional(),
})