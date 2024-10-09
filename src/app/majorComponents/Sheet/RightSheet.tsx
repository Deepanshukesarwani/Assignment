"use client";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FlightCard } from "../Fights/Flightcard";
import React from "react";
// import Sidebar from "../sidebar/Sidebar";
import { Separator } from "@radix-ui/react-select";
import { TimelineLayout } from "../sidebar/TrailSidebar";
// import { timelineData } from "@/app/data";
import { useFlightStore } from "@/store/userStore";
import emiratesLogo from '/public/icons/emirates.png';
import luthansalogo from '/public/icons/luthansa.png'
const flightData = [
  {
    airlineLogo: emiratesLogo,
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
    airlineLogo: luthansalogo,
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
    airlineLogo: luthansalogo,
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
    airlineLogo: emiratesLogo,
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
    airlineLogo: luthansalogo,
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
    airlineLogo: emiratesLogo,
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
  const updateSelectedFlight = useFlightStore((state) => state.updateSelectedFlight);

  const handleFlightClick = (flight:any) => {
    // Store the clicked flight in the global state
    updateSelectedFlight(flight);
  };
  const destinationAirport = useFlightStore((state) => state.destination);
  const departureAirport = useFlightStore((state) => state.departure);
  return (
    <>
      {flightData.map((flight, index) => (
        <Sheet>
          <SheetTrigger asChild >
            <div onClick={() => handleFlightClick(flight)}>

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
            </div>
          </SheetTrigger>
          <SheetContent side={"right"} className="min-w-[50vw]">
            <SheetHeader>

              <SheetTitle className="p-5">Flight Details</SheetTitle>

              <Separator className="my-4 h-[1px]  bg-gray-300" />
              <div className=" p-3 h-[20%]">
              <TimelineLayout  />
              </div>
            </SheetHeader>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
};

export default RightSheet;
