import { z } from "zod";

export const usernameSchema = z.object({
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/, "Username can only have letters, numbers and '_'"),
});

export const eventSchema = z.object({
    title: z
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

export const daySchema = z.object({
    isAvailable: z.boolean(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
}).refine((data) => {
    if (data.isAvailable) {
        return data.startTime<data.endTime
    }
    return true;
},
{
    message: "Start time must be before end time",
    path: ["endTime"]
});

export const availabilitySchema = z.object({
    monday: daySchema,
    tuesday: daySchema,
    wednesday: daySchema,
    thursday: daySchema,
    friday: daySchema,
    saturday: daySchema,
    sunday: daySchema,
    timeGap: z.number().min(0, "Time Gap must be 0 o more minutes").int(),
});

export const bookingSchema = z.object({
    name: z.string().min(1, "Name is a required field"),
    email: z.string().email("Invalid email"),   
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
    time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid Time format"),
    additionalInfo: z.string().optional(),
})