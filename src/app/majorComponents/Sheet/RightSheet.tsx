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
import { useFlightStore } from "@/store/userStore";

const flightData = [
  {
    airlineLogo: "/path-to/emirates-logo.png",
    airlineName: "Emirates",
    flightNumber: "AT 4334",
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
    arrivalTime: "6:45 AM",
    duration: "4h 10min",
    stops: "Non stop",
    price: "AED 1,456.90",
    departureAirport: "King Khalid International Airport",
    departureCode: "RUH",
    arrivalAirport: "Paris - Charles de Gaulle Airport",
    arrivalCode: "CDG",
    flightTime: "3h 45m",
  },
  // Additional flight entries
  {
    airlineLogo: "/path-to/air-france-logo.png",
    airlineName: "Air France",
    flightNumber: "AF 1893",
    arrivalTime: "8:30 AM",
    duration: "3h 30min",
    stops: "Non stop",
    price: "AED 3,100.50",
    departureAirport: "Charles de Gaulle Airport",
    departureCode: "CDG",
    arrivalAirport: "Dubai International Airport",
    arrivalCode: "DXB",
    flightTime: "6h 00m",
  },
  {
    airlineLogo: "/path-to/qatar-airways-logo.png",
    airlineName: "Qatar Airways",
    flightNumber: "QR 8903",
    arrivalTime: "2:15 PM",
    duration: "2h 45min",
    stops: "Non stop",
    price: "AED 2,650.75",
    departureAirport: "Hamad International Airport",
    departureCode: "DOH",
    arrivalAirport: "Kuwait International Airport",
    arrivalCode: "KWI",
    flightTime: "2h 45m",
  },
  {
    airlineLogo: "/path-to/etihad-logo.png",
    airlineName: "Etihad Airways",
    flightNumber: "EY 2304",
    arrivalTime: "5:30 PM",
    duration: "5h 20min",
    stops: "Non stop",
    price: "AED 3,900.00",
    departureAirport: "Abu Dhabi International Airport",
    departureCode: "AUH",
    arrivalAirport: "London Heathrow Airport",
    arrivalCode: "LHR",
    flightTime: "7h 00m",
  },
  {
    airlineLogo: "/path-to/british-airways-logo.png",
    airlineName: "British Airways",
    flightNumber: "BA 7890",
    arrivalTime: "10:00 AM",
    duration: "6h 30min",
    stops: "Non stop",
    price: "AED 4,200.30",
    departureAirport: "Heathrow Airport",
    departureCode: "LHR",
    arrivalAirport: "John F. Kennedy International Airport",
    arrivalCode: "JFK",
    flightTime: "8h 30m",
  },
];

const RightSheet: React.FC = () => {

  // const departureTime=
  const destinationAirport = useFlightStore((state) => state.destination);
  const departureAirport = useFlightStore((state) => state.departure);
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
              // departureTime={flight.departureTime}
              departurecode={departureAirport?.code}
              destinationcode={destinationAirport?.code}
              arrivalTime={flight.arrivalTime}
              duration={flight.duration}
              stops={flight.stops}
              price={flight.price}
            />
          </SheetTrigger>
          <SheetContent side={"right"} className="min-w-[50vw]">
            <SheetHeader>
              {/* <h1>heelo bhaiya</h1> */}
              <div>

              </div>
              <SheetTitle className="p-5">Flight Details</SheetTitle>
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
