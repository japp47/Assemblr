import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock } from "lucide-react";

const EventDetails = ({event}) => {
    const {user} = event;

    return (
        <div className="p-10 lg:w-1/3 bg-white shadow-md rounded-sm border border-gray-200">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{event.title}</h1>
            <div className="flex items-center mb-4">
                <Avatar className="w-14 h-14 mr-4 rounded-full shadow-lg border border-gray-300">
                    <AvatarImage src={user.imageUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                    <p className="text-gray-600">@{user.username}</p>
                </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2 text-gray-700">
                    <Clock className="mr-2 text-blue-500" />
                    <span className="font-medium">{event.duration} minutes</span>
                </div>
                <div className="flex items-center text-gray-700">
                    <Calendar className="mr-3 text-green-500" />
                    <span className="font-medium">Google Meet</span>
                </div>
            </div>
            <p className="text-gray-800 leading-relaxed">{event.description}</p>
        </div>
    );
}
export default EventDetails