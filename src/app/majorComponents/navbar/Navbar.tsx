import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useFlightStore } from "@/store/userStore";
import { format } from "date-fns";

interface NavbarProps {
  onClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  const destinationAirport = useFlightStore((state) => state.destination);
  const departureAirport = useFlightStore((state) => state.departure);
  const departureDate = useFlightStore((state) => state.departureDate);
  const returnDate = useFlightStore((state) => state.returnDate);

  const formattedReturnDate = format(returnDate!, "MMM dd");
  const formattedDepatureDate = format(departureDate!, "MMM dd");

  return (
    <div
      onClick={onClick}
      className="flex items-center w-full space-x-5 rounded-full border border-gray-200 p-2 shadow-sm cursor-pointer"
    >
      {/* Departure Input */}
      <div className="flex items-center w-[30%]">
        <span className="font-bold w-[30%] truncate">
          {departureAirport?.code}
        </span>
        <div className="border-none text-gray-400 w-[70%] truncate">
          {departureAirport?.city}
        </div>
      </div>

      <span className="mx-2 text-gray-400">|</span>

      {/* Destination Input */}
      <div className="flex items-center w-[30%]">
        <span className="font-bold w-[30%] truncate">
          {destinationAirport?.code}
        </span>
        <span className="border-none text-gray-400 w-[70%] truncate">
          {destinationAirport?.city}
        </span>
      </div>

      <span className="mx-2 text-gray-400">|</span>

      {/* Date Range Input */}
      <div className="w-[30%] truncate">
        <span className="border-none outline-none focus:ring-0">
          {formattedDepatureDate}-{formattedReturnDate}
        </span>
      </div>

      <span className="mx-2 text-gray-400">|</span>

      {/* Search Button */}
      <div className="w-[10%] flex justify-center">
        <Button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <Search className="h-5 text-green-900" />
        </Button>
      </div>
    </div>
  );
};
