import { Suspense } from "react";

export default function Availability({children}) {
    return (
        <div className="mx-auto">
            <Suspense fallback={
                <div>Loading Events..</div>}>{children}</Suspense>
        </div>
    )
}