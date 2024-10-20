import TestimonialCarousel from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your Events"
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Define your availability to streamline schedules"
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling Links"
  }
];

const working = [
  { 
    step: "Sign Up",
    description: "Create an account to start using our platform"
  },
  {
    step: "Set Availability",
    description: "Define your schedule to streamline your workflow"
  },
  {
    step: "Share your Link",
    description: "Share your personalized scheduling Link with others"
  },
  {
    step: "Get Booked",
    description: "Start receiving bookings and manage your schedule"
  }
]
const Home =() => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className = "text-7xl pb-6 gradient-title">Simplify your scheduling</h1>
          <p className = "text-xl text-gray-600 mb-10">
            With Assemblr, you can easily create events, set your availability, 
            and let others book time with you. Manage your appointments and events effortlessly 
            with our scheduling tool.
          </p>
          <Link href = '/dashboard'>
            <Button size = 'lg' className="text-lg">
               Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
          <Image 
            src="/poster.png"
            alt="Assemblr illustration"
            layout="fill"
            objectFit="contain"
          />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-purple-500 mb-4 mx-auto"/>
                  <CardTitle className="text-center text-purple-600"> {feature.title} </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600"> {feature.description} </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">
          What Our Users Say
        </h2>
        <TestimonialCarousel />
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">
          How AssemblR Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {working.map((step, index) => (
          <div key={index} className="text-center"> 
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 font-bold text-xl">{index+1}</span>
            </div>
            <h3 className="font-semibold text-lg mb-4">{step.step}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}</div>
      </div>
      <div className="bg-purple-700 text-white rounded-lg p-8 text-center">
  <h2 className="text-3xl font-bold mb-4">Ready to dive into scheduling with Assemblr?</h2>
  <p className="text-xl mb-6">
    Join thousands of Assemblers who trust Assemblr for their productivity!
  </p>
  <Link href="/dashboard">
    <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
      Get Started <ArrowRight className="ml-2 h-5 w-5 text-purple-700"/>
    </Button>
  </Link>
</div>


    </main>
  )
};

export default Home
