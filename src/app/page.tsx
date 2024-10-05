"use client";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, Search, RefreshCw } from "lucide-react"; // Import RefreshCw for swap icon
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import SwapImage from "./../../public/icons/Vector.png"
const FlightSearch = () => {
  const [departure, setDeparture] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  // Function to swap departure and destination values
  const handleSwap = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  return (
    <main className="w-[100vw] h-[100vh] bg-green-300 flex flex-col items-center">
      {/* form of selecting flight  */}
      <h1 className="text-3xl mt-[5rem] p-0 m-0">Good Afternoon! Brian</h1>
      <div className="w-[80%] mt-[6rem]">
        <div className="p-4 bg-white shadow rounded-md">
          <div className="flex-col space-y-3">
            <div>
              <Button>Flights</Button>
            </div>
            <div className="flex justify-between space-x-4 items-center">
              {/* "Where from?" input with icon */}
              <div className="w-1/4 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                </span>
                <Input
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  placeholder="Where from?"
                  className="pl-10"
                />
              </div>

              {/* Swap button */}
              <div className="flex items-center">
                <Button
                  variant={"ghost"}
                  onClick={handleSwap}
                  className="p-2"
                >
                  <Image src={SwapImage}  className="" alt="img" /> {/* Swap icon */}
                </Button>
              </div>

              {/* "Where to?" input with icon */}
              <div className="w-1/4 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                </span>
                <Input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where To?"
                  className="pl-10"
                />
              </div>

              {/* Departure Date */}
              <div className="w-1/4">
                <div className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[100%] justify-start text-left font-normal",
                          !departureDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {departureDate ? (
                          format(departureDate, "PPP")
                        ) : (
                          <span>Departure Date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Return Date */}
              <div className="w-1/4">
                <div className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[100%] justify-start text-left font-normal",
                          !returnDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? (
                          format(returnDate, "PPP")
                        ) : (
                          <span>Return Date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>

          {/* Search Flights button with Search Icon */}
          <div className="mt-4 flex justify-end">
            <Button>
              <Search className="mr-2 h-4 w-4" /> {/* Add Search icon here */}
              Search Flights
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FlightSearch;



