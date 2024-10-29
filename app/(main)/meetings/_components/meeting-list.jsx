import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar, Clock, Video } from "lucide-react";

const MeetingList = ({ meetings, type }) => {
    if (meetings.length === 0) {
        return <p className="text-center text-xl text-gray-500 mt-8">No {type} meetings found.</p>;
    }
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meetings.map((meeting) => (
                <Card
                    key={meeting.id}
                    className="flex justify-between flex-col shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200"
                >
                    <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
                        <CardTitle className="text-xl font-semibold text-gray-800">{meeting.event.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">with {meeting.event.user.name}</CardDescription>
                        {meeting.additionalInfo && (
                            <CardDescription className="text-xs text-gray-500 mt-1">
                                &quot;{meeting.additionalInfo}&quot;
                            </CardDescription>
                        )}
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className="flex items-center text-gray-700 mb-3">
                            <Calendar className="mr-2 h-5 w-5 text-gray-500" />
                            <span>{format(new Date(meeting.startTime), "MMMM d, yyyy")}</span>
                        </div>
                        <div className="flex items-center text-gray-700 mb-3">
                            <Clock className="mr-2 h-5 w-5 text-gray-500" />
                            <span>
                                {format(new Date(meeting.startTime), "h:mm a")} -{" "}
                                {format(new Date(meeting.endTime), "h:mm a")}
                            </span>
                        </div>
                        {meeting.meetLink && (
                            <div className="flex items-center">
                                <Video className="mr-2 h-5 w-5 text-gray-500" />
                                <a
                                    href={meeting.meetLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 hover:underline"
                                >
                                    Join Meeting
                                </a>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="p-4 border-t border-gray-200">
                        <Button variant="destructive" className="w-full text-sm py-2 hover:bg-red-600">
                            Cancel Meeting
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default MeetingList;
