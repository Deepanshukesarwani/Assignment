"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FlightCard } from "../Fights/Flightcard";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Separator } from "@radix-ui/react-select";
import { TimelineLayout } from "../sidebar/TrailSidebar";
import { timelineData } from "@/app/data";
const flightData = [
  {
    airlineLogo: "/path-to/emirates-logo.png",
    airlineName: "Emirates",
    flightNumber: "AT 4334",
    departureTime: "9:45 AM",
    arrivalTime: "11:45 AM",
    duration: "2h 10min",
    stops: "Non stop",
    price: "AED 2,456.90",
    departureAirport: "Dubai International Airport",
    departureCode: "DXB",
    arrivalAirport: "King Khalid International Airport",
    arrivalCode: "RUH",
    flightTime: "3h 45m",
    layoverTime: "2h 25m",
  },
  {
    airlineLogo: "/path-to/lufthansa-logo.png",
    airlineName: "Lufthansa",
    flightNumber: "AT 4334",
    departureTime: "11:45 PM",
    arrivalTime: "6:45 AM",
    duration: "4h 10min",
    stops: "2 stops",
    price: "AED 1,456.90",
    departureAirport: "King Khalid International Airport",
    departureCode: "RUH",
    arrivalAirport: "Paris - Charles de Gaulle Airport",
    arrivalCode: "CDG",
    flightTime: "3h 45m",
  },
  // More flights...
];
const RightSheet: React.FC = () => {
  return (
    <>
      {flightData.map((flight, index) => (
        <Sheet>
          <SheetTrigger asChild className="">
            <FlightCard
              key={index}
              airlineLogo={flight.airlineLogo}
              airlineName={flight.airlineName}
              flightNumber={flight.flightNumber}
              departureTime={flight.departureTime}
              arrivalTime={flight.arrivalTime}
              duration={flight.duration}
              stops={flight.stops}
              price={flight.price}
            />
          </SheetTrigger>
          <SheetContent side={"right"} className="min-w-[50vw]">
            <SheetHeader>
              {/* <h1>heelo bhaiya</h1> */}
              <SheetTitle>Flight Details</SheetTitle>
              {/* <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription> */}
              <Separator className="my-4 h-[1px]  bg-gray-300" />
              {/* <Sidebar
                departureAirport={flight.departureAirport}
                departureCode={flight.departureCode}
                arrivalAirport={flight.arrivalAirport}
                arrivalCode={flight.arrivalCode}
                airlineName={flight.airlineName}
                airlineLogo={flight.airlineLogo}
                flightTime={flight.flightTime}
                layoverTime={flight.layoverTime}
              /> */}
              {/* <Sidebar
              flightLegs={flightData}
              /> */}
              <TimelineLayout items={timelineData} />
            </SheetHeader>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
};

export default RightSheet;
