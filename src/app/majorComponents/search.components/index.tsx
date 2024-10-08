import React, { useState, useEffect } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { airports } from "@/data/data"; // Import your airports data
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import SwapImage from "/public/icons/Vector.png";
import { Calendar as CalendarIcon, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFlightStore } from "@/store/userStore";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
function Index() {
  // const [departureDate, setDepartureDate] = useState<Date>();
  // const [returnDate, setReturnDate] = useState<Date>();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPath = usePathname();

  const [filteredAirports, setFilteredAirports] = useState(airports);
  const [activeDropdown, setActiveDropdown] = useState<
    "departure" | "destination" | null
  >(null);

  const departure = useFlightStore((state) => state.departure);
  const destination = useFlightStore((state) => state.destination);
  const whereFrom = useFlightStore((state) => state.whereFrom);
  const whereTo = useFlightStore((state) => state.whereTo);
  const departureDate = useFlightStore((state) => state.departureDate);
  const returnDate = useFlightStore((state) => state.returnDate);
  const loading = useFlightStore((state) => state.isloading);
  const setDeparture = useFlightStore((state) => state.updateDeparture);
  const setDestination = useFlightStore((state) => state.updateDestination);
  const setWhereFrom = useFlightStore((state) => state.updateWhereFrom);
  const setwhereTo = useFlightStore((state) => state.updateWhereTo);
  const setDepartureDate = useFlightStore((state) => state.updateDepartureDate);
  const setReturnDate = useFlightStore((state) => state.updateReturnDate);

  const setLoading = useFlightStore((state) => state.updateIsloading);
  const handleSwap = () => {
    const tempwhereFrom = whereFrom;
    const tempDestination = destination;
    setWhereFrom(whereTo!);
    setwhereTo(tempwhereFrom!);
    setDestination(departure!);
    setDeparture(tempDestination!);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 6 seconds

    // return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [loading, setLoading]);

  const handleSearchFlights = () => {
    console.log(currentPath);
    setLoading(true);

    if (!departure || !destination || !departureDate || !returnDate) {
      toast({
        title: "Error",
        description: "All fields are mandatory. Please fill them out.",
        // status: "error",
        duration: 3000, // Duration of the toast
      });
    }  else {
      router.push("/search");
    }

    console.log(searchParams);
  };

  const handleSearch = (input: string, type: "departure" | "destination") => {

    if (input === "") {
      setFilteredAirports([]);  // Set filtered to empty array when input is cleared
      setActiveDropdown(null);   // Close dropdown when input is empty
       // Exit the function early if input is empty
    }
    console.log(whereFrom);
    const filtered = airports.filter(
      (airport) =>
        airport.city.toLowerCase().includes(input.toLowerCase()) ||
        airport.country.toLowerCase().includes(input.toLowerCase()) ||
        airport.name.toLowerCase().includes(input.toLowerCase()) ||
        airport.code.toLowerCase().includes(input.toLowerCase())
    );
    if (type === "departure") {
      setWhereFrom(input);
    } else {
      setwhereTo(input);
    }

    setFilteredAirports(filtered);
    setActiveDropdown(type); // Show dropdown for the correct input field
  };

  // console.log("departure Airport :", departure);

  // console.log("destination airport :",destination);
  // Function to handle selecting an airport
  const handleSelectAirport = (
    selectedAirportId: string,
    type: "departure" | "destination"
  ) => {
    // console.log(selectedAirportId);
    const selectedAirport = airports.find(
      (airport) => airport.id === selectedAirportId
    );

    console.log("selectedAirport :", selectedAirport);

    if (!selectedAirport) return;

    if (type === "departure") {
      setWhereFrom(
        `${selectedAirport.city}, ${selectedAirport.country} (${selectedAirport.code})`
      );
      setDeparture(selectedAirport); // Set the full airport object in state
    } else {
      setDestination(selectedAirport);
      setwhereTo(
        `${selectedAirport.city}, ${selectedAirport.country} (${selectedAirport.code})`
      );
    }
    setActiveDropdown(null); // Close dropdown after selection
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between space-x-4 items-center">
        {/* "Where from?" input with icon and dropdown */}
        <div className="w-1/4 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MapPin className="w-4 h-4 text-gray-500" />
          </span>
          <Input
            value={whereFrom || ""} // Show city of the selected departure airport
            onChange={(e) => handleSearch(e.target.value, "departure")}
            placeholder="Where from?"
            className="pl-10 h-14"
          />
          {activeDropdown === "departure" && (
            <ul className="absolute mt-2 w-full bg-white text-black rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto custom-scrollbar overflow-hidden">
              {filteredAirports.map((airport) => (
                <li
                  key={airport.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-300 flex justify-between "
                  onClick={() => handleSelectAirport(airport.id, "departure")}
                >
                  {/* {airport.city}, {airport.country} ({airport.code}) */}
                  <div>
                  {airport.country}
                  <br />
                  <span className="text-gray-500 font-sans">{airport.city}</span>
                  </div>
                  <div>{airport.code}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Swap button */}
        <div className="flex items-center rounded-full shadow-sm h-12 w-12 p-4 hover:bg-gray-50" onClick={handleSwap}>
          {/* <Button variant={"ghost"}  className="p-2 rounded-full">
          </Button> */}
            <Image src={SwapImage} alt="Swap" />
        </div>

        {/* "Where to?" input with icon and dropdown */}
        <div className="w-1/4 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MapPin className="w-4 h-4 text-gray-500" />
          </span>
          <Input
            value={whereTo || ""} // Show city of the selected destination airport
            onChange={(e) => handleSearch(e.target.value, "destination")}
            placeholder="Where to?"
            className="pl-10 h-14"
          />
          {activeDropdown === "destination" && (
            <ul className="absolute mt-2 w-full bg-white text-black rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto custom-scrollbar">
              {filteredAirports.map((airport) => (
                <li
                  key={airport.id}
                   className="px-4 py-2 cursor-pointer hover:bg-gray-300 flex justify-between "
                  onClick={() => handleSelectAirport(airport.id, "destination")}
                >
                  <div className="">
                  {airport.country}
                  <br />
                  <span className="text-gray-500 font-sans">{airport.city}</span>
                  </div>
                  <div>{airport.code}</div>
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
                className={cn(
                  "w-[100%] justify-start text-left font-normal h-14",
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
                selected={departureDate!}
                onSelect={(day: Date | undefined) =>
                  setDepartureDate(day ?? null)
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Return Date */}
        <div className="w-1/4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[100%] justify-start text-left font-normal h-14",
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
                selected={returnDate!}
                onSelect={setReturnDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mt-4 flex justify-end w-[99%] ">
        <Button
          onClick={handleSearchFlights}
          className="bg-green-900 hover:bg-green-950 w-[12rem] h-12 p-0 m-0"
        >
          <Search className="mr-2 h-4 w-4" />
          Search Flights
        </Button>
      </div>
    </div>
  );
}

export default Index;
