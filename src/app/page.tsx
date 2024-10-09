"use client";
import  React, { useState } from "react";
// import { MapPin, Search } from "lucide-react";
// import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { airports } from "./../data/data"; // Import your airports data
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";
// import Image from "next/image";
// import SwapImage from "./../../public/icons/Vector.png";
// import { Calendar as CalendarIcon, RefreshCw } from "lucide-react"; 
import { useRouter } from 'next/navigation'
import Index from "./majorComponents/search.components";
const FlightSearch = () => {

  const [departure, setDeparture] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [filteredAirports, setFilteredAirports] = useState(airports);
  const [activeDropdown, setActiveDropdown] = useState<"departure" | "destination" | null>(null);

  const router = useRouter()
 
  // Function to swap departure and destination values
  const handleSwap = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };



  const handleSearch = (input: string, type: "departure" | "destination") => {
    const filtered = airports.filter(
      (airport) =>
        airport.city.toLowerCase().includes(input.toLowerCase()) ||
        airport.country.toLowerCase().includes(input.toLowerCase()) ||
        airport.name.toLowerCase().includes(input.toLowerCase()) ||
        airport.code.toLowerCase().includes(input.toLowerCase())
    );

    if (type === "departure") {
      setDeparture(input);
      setFilteredAirports(filtered);
      setActiveDropdown("departure");
    } else {
      setDestination(input);
      setFilteredAirports(filtered);
      setActiveDropdown("destination");
    }
  };

  // Function to handle selecting an airport
  const handleSelectAirport = (airport: string, type: "departure" | "destination") => {
    if (type === "departure") {
      setDeparture(airport);
    } else {
      setDestination(airport);
    }
    setActiveDropdown(null); // Close dropdown after selection
  };
  return (
    <main className="w-[100vw] h-[100vh]  flex flex-col items-center">
      {/* Flight form */}
      <div className="w-[75%] mt-[4rem] h-[60%]  p-3 ">
      <h1 className="text-4xl mb-4 p-0 m-0 text-center">Good Afternoon! Brian</h1>
        <div className="p-6 bg-white w-[100%] h-[80%] flex flex-col  shadow-md shadow-top-md rounded-md">

          <div className="flex-col space-y-4 mb-4 h-[]">
            <div>
              <Button>Flights</Button>
            </div>
          </div> 

          <div>
          <Index/>
          </div>

        </div>
      </div>
    </main>
  );
};

export default FlightSearch;




