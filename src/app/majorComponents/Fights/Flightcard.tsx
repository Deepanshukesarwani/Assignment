// components/FlightCard.tsx
import React from "react";
import { Button } from "@/components/ui/button"; // Reuse Shadcn's Button component
import Image from "next/image";

interface FlightCardProps {
  airlineLogo: string; // Airline logo image URL
  airlineName: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  stops: string;
  duration: string;
  price: string;
  onSelect?: () => void; // Event when 'Select' button is clicked
  onClick?: () => void;
}

interface NavbarProps {
  
  }
export const FlightCard: React.FC<FlightCardProps> = ({
  airlineLogo,
  airlineName,
  flightNumber,
  departureTime,
  arrivalTime,
  stops,
  duration,
  price,
  onSelect,
  onClick
}) => {
  return (
    <div onClick={onClick} className="border flex  justify-between rounded-none shadow-md hover:bg-gray-50">
      <div className=" w-[85%]">
        <div className="flex justify-between items-center p-4  ">
          {/* Flight details */}
          <div className="flex items-center space-x-4">
            {/* Airline Logo */}
            <Image
              src={airlineLogo}
              alt={airlineName}
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <p className="font-semibold">
                {airlineName} • {flightNumber}
              </p>
              <p>
                {departureTime} - {arrivalTime}
              </p>
            </div>
          </div>

          {/* Flight timings and stops */}
          <div className="flex flex-col space-y-2 text-center">
            <p>
              <span>CDG</span>- <span>DXB</span>
            </p>
            <p>{duration}</p>
          </div>

          <div>
            <p>{stops}</p>
          </div>
          {/* Price and Select Button */}
        </div>
        <div className="flex justify-between  items-center p-4  ">
          {/* Flight details */}
          <div className="flex items-center space-x-4">
            {/* Airline Logo */}
            <Image
              src={airlineLogo}
              alt={airlineName}
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <p className="font-semibold">
                {airlineName} • {flightNumber}
              </p>
              <p>
                {departureTime} - {arrivalTime}
              </p>
            </div>
          </div>

          {/* Flight timings and stops */}
          <div className="flex flex-col space-y-2 text-center">
            <p>
              <span>CDG</span>- <span>DXB</span>
            </p>
            <p>{duration}</p>
          </div>

          <div>
            <p>{stops}</p>
          </div>

          {/* Price and Select Button */}
        </div>
      </div>

      <div className="flex flex-col  p-2 bg-green-500  justify-end text-right  w-[15%]">
        <div className=" flex flex-col justify-center">
          <p className="font-semibold flex items-start">from</p>
          <p className="font-semibold flex items-start"> {price}</p>
          <Button onClick={onSelect} className="mt-2">
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};
