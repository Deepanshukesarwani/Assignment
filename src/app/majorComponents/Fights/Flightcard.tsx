// components/FlightCard.tsx
import React from "react";
import { Button } from "@/components/ui/button"; // Reuse Shadcn's Button component
import Image from "next/image";
// import emiratesLogo from '/public/icons/emirates.png';
interface FlightCardProps {
  airlineLogo: string; // Airline logo image URL
  airlineName: string;
  flightNumber: string;
  // departureTime: string;
  destinationcode:string | undefined;
  departurecode:string | undefined;
  arrivalTime: string;
  stops: string;
  duration: string;
  price: string;
  onSelect?: () => void; // Event when 'Select' button is clicked
  onClick?: () => void;
}

export const FlightCard: React.FC<FlightCardProps> = ({
  airlineLogo,
  airlineName,
  flightNumber,
  // departureTime,
  destinationcode,
  departurecode,
  arrivalTime,
  stops,
  duration,
  price,
  onSelect,
  onClick
}) => {
  console.log(airlineLogo)
  return (
    <div onClick={onClick} className=" h-[90%] border  border-gray-300 flex  justify-between rounded-sm  hover:bg-gray-50">
      <div className=" w-[81%]">
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
                2:30 PM - {arrivalTime}
              </p>
            </div>
          </div>

          {/* Flight timings and stops */}
          <div className="flex flex-col space-y-2 text-center">
            <p>
              <span className="text-gray-400">{departurecode}</span>- <span className="text-gray-400">{destinationcode}</span>
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
                1:30 PM - {arrivalTime}
              </p>
            </div>
          </div>

          {/* Flight timings and stops */}
          <div className="flex flex-col space-y-2 text-center">
            <p>
              <span className="text-gray-400">{destinationcode}</span>- <span className="text-gray-400">{departurecode}</span>
            </p>
            <p>{duration}</p>
          </div>

          <div>
            <p>{stops}</p>
          </div>

          {/* Price and Select Button */}
        </div>
      </div>

      <div className="flex flex-col  p-3 border-l border-gray-300   justify-end text-right  w-[19%]">
        <div className=" flex flex-col justify-center w-[100%]">
          <p className="font-extralight from-neutral-300 text-gray-400 flex items-start">from</p>
          <p className="font-semibold font-nuetral-300 flex items-start"> {price}</p>
          <Button onClick={onSelect} className="mt-2 w-[100%] bg-green-900">
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};
