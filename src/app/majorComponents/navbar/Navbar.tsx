// components/FlightSearchInput.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
interface NavbarProps {
  onClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  const [departure, setDeparture] = useState("INDIA");
  const [destination, setDestination] = useState("USA");
  const [dateRange, setDateRange] = useState("");

  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-5 rounded-full border border-gray-200 p-2 shadow-sm cursor-pointer"
    >
      {/* Departure Input */}
      <div className="flex items-center w-[28%]">
        <span className="absolute font-bold">
          {`CDG`}
        </span>
        <span className="border-none outline-none focus:ring-0 pl-10 font-extralight">{departure}</span>
      </div>

      <span className="mx-2">|</span>

      {/* Destination Input */}
      <div className="flex items-center  w-[28%]">
        <span className="absolute font-bold">
          {`CDZ`}
        </span>
        <span className="border-none outline-none focus:ring-0 pl-10 font-extralight">{destination}</span>
      </div>

      <span className="mx-2">|</span>

      {/* Date Range Input */}
      <div className="flex items-center w-[28%]">
        <span className="border-none outline-none focus:ring-0 pl-10 font-extralight">{`June 25- jul 2`}</span>
      </div>

      <span className="mx-2">|</span>
      {/* Search Button */}
      <div className="w-[10%]">
      <Button className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white">
        <Search className="h-5" />
      </Button>
      </div>
    </div>
  );
};
