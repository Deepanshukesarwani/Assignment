"use client";

import React from "react";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineConnector,
//   TimelineHeader,
//   TimelineTitle,
//   TimelineIcon,
//   TimelineDescription,
//   TimelineContent,
//   TimelineTime,
// } from "@/components/ui/timeline/timeLine";
import { TimelineElement } from "@/app/data";
import { useFlightStore } from "@/store/userStore";
import Image from "next/image";
import { format } from "date-fns";
interface TimelineLayoutProps {
  items?: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayout = ({ items }: TimelineLayoutProps) => {


	const selectedFlight = useFlightStore((state) => state.selectedFlight);
	const destination=useFlightStore((state)=>state.destination)
	const departure=useFlightStore((state)=>state.departure);
	const returnDate=useFlightStore((state)=>state.returnDate);
	const departureDate=useFlightStore((state)=>state.departureDate);

	const formattedReturnDate=format(returnDate!,"EEE dd MMM");
	const formattedDepatureDate=format(departureDate!,"EEE dd MMM");
	console.log(formattedReturnDate);
// console.log(destination);
	// console.log(selectedFlight);

	if (!selectedFlight) {
	  return <div>No flight selected</div>;
	}
  return (
	<div className="flex relative flex-col items-start space-y-0 py-4 w-full">
  {/* Div 1 */}
  <div id="1" className="w-full">
    <div className="flex space-x-3  w-full">
      {/* Icon and connector */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-[1px] border-black mb-2"></div>
        <div className="w-[0.6px] h-[4rem] bg-black"></div>
      </div>
      {/* Flight info */}
      <div className="flex justify-between w-full">
        <div className="space-y-1">
          <div className="text-sm text-gray-500">{formattedDepatureDate}· 2:15</div>
          <div className="font-semibold">{departure?.code} · {departure?.name}</div>
        </div>
        <div className="flex items-center space-x-2">
          <Image src={selectedFlight.airlineLogo} alt="Airline Logo" className="h-6 w-6" />
          <div className="text-xs text-gray-500">
		  {selectedFlight.airlineName} · {selectedFlight.flightNumber} <br />
                Duration: {selectedFlight.duration} <br />
                Flight time: {selectedFlight.flightTime}
          </div>
        </div>
      </div>
    </div>

    {/* Timeline item 2 */}
    <div className="flex mt-0 space-x-3  w-full">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-[1px] mt-1 border-black"></div>
        <div className="w-[1.5px] h-[6rem] border-l mt-[0.8rem] border-black border-dashed ml-[0.1rem]"></div>
      </div>
      <div className="flex justify-between w-full">
        <div className="space-y-1">
          <div className="text-sm ">{formattedDepatureDate} · 2:15</div>
          <div className="font-semibold">{destination?.code} . {destination?.name}</div>
          <div>layoverTime</div>
        </div>
      </div>
    </div>
  </div>

  {/* Div 3 */}
  <div id="3" className="mt-[1rem] w-full">
    <div className="flex space-x-3 w-full">
      {/* Icon and connector */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-[1px] border-black mb-2"></div>
        <div className="w-[0.6px] h-[4rem] bg-black"></div>
      </div>
      {/* Flight info */}
      <div className="flex justify-between w-full">
        <div className="space-y-1">
          <div className="text-sm text-gray-500">{formattedReturnDate} · 2:15</div>
          <div className="font-semibold">{destination?.code} . {destination?.name}</div>
        </div>
        <div className="flex items-center space-x-2">
          <Image src={selectedFlight.airlineLogo} alt="Airline Logo" className="h-6 w-6" />
          <div className="text-xs text-gray-500">
		  {selectedFlight.airlineName} · {selectedFlight.flightNumber} <br />
                Duration: {selectedFlight.duration} <br />
                Flight time: {selectedFlight.flightTime}
          </div>
        </div>
      </div>
    </div>

    {/* Timeline item 2 */}
    <div className="flex mt-0 space-x-3">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-[1px] mt-1 border-black"></div>
      </div>
      <div className="flex justify-between w-full">
        <div className="space-y-1">
          <div className="text-sm text-gray-500">{formattedReturnDate}· 2:15</div>
          <div className="font-semibold">{departure?.code} · {departure?.name}</div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
