"use client"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const testimonials = [
    {
        name: "Alice Johnson",
        role: "Freelance Designer",
        content: "Assemblr has completely transformed the way I handle my client meetings. It’s so easy to set my availability and let clients book time without endless back-and-forth emails!",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Michael Lee",
        role: "Project Manager",
        content: "With Assemblr, managing my team’s appointments has never been easier. I can create events, track bookings, and stay on top of everyone’s availability in one place. Highly recommend it!",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Rohan Mehta",
        role: "Startup Founder",
        content: "Assemblr is a game-changer for me. Managing investor meetings and team syncs has become seamless. The ability to book time and manage events is a huge time-saver!",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Samantha Green",
        role: "Event Coordinator",
        content: "I love how intuitive and flexible Assemblr is. Whether I’m organizing a small meeting or a large event, it gives me the tools I need to streamline the process.",
        image: "https://i.pravatar.cc/150?img=4",
    }

]
const TestimonialCarousel = () => {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            className="w-full mx-auto">
                <CarouselContent className="-ml-1">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full">
                                    <CardContent className="flex flex-col items-center justify-between p-6">
                                        <p className="text-gray-600 mb-4">
                                            &quot;{testimonial.content}&quot;
                                        </p>
                                        <div className="flex items-center mt-4">
                                            <Avatar className="h-12 w-12 mr-4">
                                                <AvatarImage src={testimonial.image} />
                                                <AvatarFallback> {testimonial.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-gray-600">{testimonial.name}</p>
                                                <p className="text-gray-600">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
    )
}

export default TestimonialCarousel