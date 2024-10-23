"use server";

import { eventSchema } from "@/app/lib/validators";
import { auth } from "@clerk/nextjs/server";

export async function createEvent(data) {
    const {userId} = auth();
    if(!userId) throw new Error("Unauthorized");

    const validateData = eventSchema.parse(data);

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId
        }
    });

    if(!user) throw new Error("User not found");

    const event = await db.event.create({
        data: {
            ...validateData,
            userId: user.id,

        }
    });

    return event
}