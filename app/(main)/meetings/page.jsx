import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MeetingList from "./_components/meeting-list"
import { getUserMeetings } from "@/actions/meetings"
import { Suspense } from "react"
import Spinner from "@/components/spinner"

export const metadata = {
    title: 'Your Meetings | AssemblR',
    description: 'Your meetings, in one place.',
}
const MeetingPage = () => {
  return (
    <Tabs defaultValue="upcoming">
        <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Suspense fallback={
              <div>
                <div>
                  Loading Upcoming Meetings...{<Spinner/>}
                </div>
              </div>
              }>
            <UpcomingMeetings/>
          </Suspense>
        </TabsContent>
        <TabsContent value="past">
        <Suspense fallback={
              <div>
                <div>
                  Loading Past Meetings...{<Spinner/>}
                </div>
              </div>
              }>
            <PastMeetings/>
          </Suspense>
        </TabsContent>
    </Tabs>

  )
}


async function UpcomingMeetings() {
  const meetings = await getUserMeetings("upcoming");
  return <MeetingList meetings={meetings} type={"upcoming"} />
}
async function PastMeetings() {
  const meetings = await getUserMeetings("past");
  return <MeetingList meetings={meetings} type={"past"} />
}

export default MeetingPage