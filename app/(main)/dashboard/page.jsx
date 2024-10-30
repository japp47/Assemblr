'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usernameSchema } from "@/app/lib/validators";
import useFetch from "@/hooks/use-fetch";
import { updateUsername } from "@/actions/users";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { getLatestUpdates } from "@/actions/dasboard";
import { format } from "date-fns";

const Dashboard = () => {
  const { isLoaded, user } = useUser();
  const [origin, setOrigin] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window?.location.origin);
    }
  }, []);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(usernameSchema)
  });

  useEffect(() => {
    setValue("username", user?.username);
  }, [isLoaded]);

  const { loading, error, fn: fnUpdateUsername } = useFetch(updateUsername);
  const { loading: loadingUpdates, data: upcomingMeetings, fn: fnGetLatestUpdates } = useFetch(getLatestUpdates);

  useEffect(() => {
    (async () => await fnGetLatestUpdates())()
  }, [])

  const onSubmit = async (data) => {
    fnUpdateUsername(data.username);
  };

  const handleViewProfile = () => {
    router.push(`/${user?.username}`);
  };

  return (
    <div className="space-y-8">
      <Card className="bg-white shadow-md rounded-lg overflow-hidden">
  <CardHeader className="bg-gray-100 p-4">
    <CardTitle className="text-lg font-semibold text-gray-800">
      Welcome, {user?.firstName}
    </CardTitle>
  </CardHeader>
  <CardContent className="p-4">
    {!loadingUpdates ? (
      <div>
        {upcomingMeetings && upcomingMeetings.length > 0 ? (
          <ul className="space-y-2">
            {upcomingMeetings.map((meeting) => {
              return (
                <li
                  key={meeting.id}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm hover:bg-gray-100 transition duration-200"
                >
                  <span className="text-gray-800">
                    {meeting.event.title} on{" "}
                    {format(new Date(meeting.startTime), "MMM d, yyyy, h:mm a")}{" "}
                    with {meeting.name}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500">No upcoming Meetings.</p>
        )}
      </div>
    ) : (
      <p className="text-gray-500">Loading Updates...</p>
    )}
  </CardContent>
</Card>


<Card className="bg-white shadow-md rounded-lg overflow-hidden">
  <CardHeader className="bg-gray-100 p-4 border-b mb-2">
    <CardTitle className="text-xl font-semibold text-gray-800">
      Your Unique Link
    </CardTitle>
    </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span>{origin}/</span>
                <Input {...register("username")} placeholder="username" />
              </div>

              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
              )}
              {error && (
                <p className="text-red-500 text-sm mt-1">{error?.message}</p>
              )}
            </div>
            {loading && (
              <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
            )}
            <Button className="py-2"type="submit">Update Username</Button>
          </form>
          <div className="mt-4">
            <Button variant="link" onClick={handleViewProfile} className="text-base text-purple-800 font-medium mx-auto border-2 rounded-sm px-4 py-2 hover:bg-purple-100 transition duration-300 ease-in-out">
              View Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
