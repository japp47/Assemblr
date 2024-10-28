import Spinner from "@/components/spinner";
import { Suspense } from "react";

export default function Availability({ children }) {
    return (
        <div className="container mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Availability
                </h2>
                <Suspense fallback={<Spinner/>}>
                    {children}
                </Suspense>
            </div>
        </div>
    );
}
