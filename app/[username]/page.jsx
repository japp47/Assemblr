import { fetchUserByUsername } from "@/actions/users";
import EventCard from "@/components/event-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const user = await fetchUserByUsername(params.username);
    if (!user) return { title: "User not found" };
    
    return {
        title: `${user.name}'s Profile | AssemblR`,
        description: `Book an event with ${user.name}. View the public events and schedules`,
    };
}

const UserPage = async ({ params }) => {
    const user = await fetchUserByUsername(params.username);
    if (!user) return notFound();

    return (
        <div className="container mx-auto px-6 py-10">
           <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center mb-10 text-center border border-gray-200">
                <Avatar className="w-28 h-28 mb-4 ring-2 ring-purple-600 shadow-md">
                    <AvatarImage src={user.imageUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-wide">{user.name}</h1>
            <p className="text-gray-600 max-w-md leading-relaxed">
            Welcome to AssemblR! Explore <span className="font-semibold">{user.name}</span>'s public events and book a time to connect.
            </p>
        </div>

            {user.events.length === 0 ? (
                <p className="text-gray-600 text-center text-lg mt-10">No Public Events Available.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {user.events.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            username={params.username}
                            isPublic
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserPage;
