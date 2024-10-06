import React,{useState} from 'react'
// import  React, { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { airports } from '@/data/data'; // Import your airports data
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import SwapImage from "/public/icons/Vector.png";
import { Calendar as CalendarIcon, RefreshCw } from "lucide-react"; 
import { useRouter } from 'next/navigation'
function Index() {

    const [departure, setDeparture] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [filteredAirports, setFilteredAirports] = useState(airports);
  const [activeDropdown, setActiveDropdown] = useState<"departure" | "destination" | null>(null);

  const handleSwap = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  const router=useRouter();
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
    <div className='mt-2'>
       <div className="flex justify-between space-x-4 items-center">
              {/* "Where from?" input with icon and dropdown */}
              <div className="w-1/4 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                </span>
                <Input
                  value={departure}
                  onChange={(e) => handleSearch(e.target.value, "departure")}
                  placeholder="Where from?"
                  className="pl-10"
                />
                {activeDropdown === "departure" && (
                  <ul className="absolute mt-2 w-full bg-green-500 text-white rounded-lg shadow-lg z-10">
                    {filteredAirports.map((airport) => (
                      <li
                        key={airport.id}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                        onClick={() => handleSelectAirport(`${airport.city}, ${airport.country} (${airport.code})`, "departure")}
                      >
                        {airport.city}, {airport.country} ({airport.code})
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Swap button */}
              <div className="flex items-center">
                <Button variant={"ghost"} onClick={handleSwap} className="p-2">
                  <Image src={SwapImage} alt="Swap" />
                </Button>
              </div>

              {/* "Where to?" input with icon and dropdown */}
              <div className="w-1/4 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                </span>
                <Input
                  value={destination}
                  onChange={(e) => handleSearch(e.target.value, "destination")}
                  placeholder="Where to?"
                  className="pl-10"
                />
                {activeDropdown === "destination" && (
                  <ul className="absolute mt-2 w-full bg-green-500 text-white rounded-lg shadow-lg z-10">
                    {filteredAirports.map((airport) => (
                      <li
                        key={airport.id}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                        onClick={() => handleSelectAirport(`${airport.city}, ${airport.country} (${airport.code})`, "destination")}
                      >
                        {airport.city}, {airport.country} ({airport.code})
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Departure Date */}
              <div className="w-1/4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-[100%] justify-start text-left font-normal", !departureDate && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP") : <span>Departure Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Return Date */}
              <div className="w-1/4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-[100%] justify-start text-left font-normal", !returnDate && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Return Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
            <Button   onClick={() => router.push('/search')} className='bg-green-600 hover:bg-green-700'>
              <Search className="mr-2 h-4 w-4" />
              Search Flights
            </Button>
          </div>
    </div>
  )
}

export default Index
