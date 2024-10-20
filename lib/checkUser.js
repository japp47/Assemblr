import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
    const user = await currentUser();
    // console.log(user);

    if (!user) {
        console.log("User not logged In");
        return null;
    }

    try {
        const loggedInUser = await db?.user.findUnique({
            where: {
                clerkUserId: user.id,
            }
        })
        if (loggedInUser) {
            return loggedInUser;
        }

        // Safely access the user's name and email
        const name = `${user.firstName || ''} ${user.lastName || ''}`.trim();

        await clerkClient.users.updateUser(user.id, {
            username: name.split(" ").join("-") + user.id.slice(-4)
        });

        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
                username: name.split(" ").join("-") + user.id.slice(-4)
            }
        });

        return newUser;
    } catch (err) {
        console.error("Error in checkUser:", err);
        return null;
    }
};
