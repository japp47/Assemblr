import { fetchEventDetails } from "@/actions/events";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import EventDetails from "./_components/event-details";
import BookingForm from "./_components/booking-form";
import { getEventAvailability } from "@/actions/availability";

export async function generateMetadata({params}) {
    const event = await fetchEventDetails(params.username, params.eventId);
    if(!event) return {
        title: "Event not found",
    }
    return {
        title: `Assemble ${event.title} with ${event.user.name} | AssemblR`,
        description: `Book ${event.title} event with ${event.user.name} for ${event.duration} minutes`,
    }
}
const EventPage = async({params}) => {
    const event = await fetchEventDetails(params.username, params.eventId);
    const availability = await getEventAvailability(params.eventId);
    if(!event) return notFound();

    return(
        <div className="flex flex-col justify-center lg:flex-row px-4 py-8">
            <EventDetails event={event}/>
            <Suspense fallback={
                <div>Loading Booking From...</div>
            }>
                <BookingForm event = {event} availability = {availability}/>
            </Suspense>
        </div>
    )
}
export default EventPage;   