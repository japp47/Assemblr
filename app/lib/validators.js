import { z } from "zod";

export const usernameSchema = z.object({
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/, "Username can only have letters, numbers and '_'"),
});

export const eventSchema = z.object({
    ttle: z
        .string()
        .min(2, "Title is Required")
        .max(100,"Title exceeded the maximum limit"),
    description: z
        .string()
        .min(2, "Description is Required")
        .max(1000, "Description exceeded the maximum limit"),
    duration: z
        .number().int().positive("Duration must be a positive number"),
    isPrivate: z.boolean(),
})