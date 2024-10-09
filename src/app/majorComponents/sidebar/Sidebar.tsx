// Sidebar.tsx
import React from "react";
import Image from "next/image";
interface FlightLeg  {
  departureAirport: string;
  departureCode: string;
  arrivalAirport: string;
  arrivalCode: string;
  airlineName: string;
  airlineLogo: string;
  flightTime: string;
  layoverTime?: string;
}

interface SidebarProps {
    flightLegs?: FlightLeg[];
  }
const Sidebar: React.FC<SidebarProps> = (
//     {
//   departureAirport,
//   departureCode,
//   arrivalAirport,
//   arrivalCode,
//   airlineName,
//   airlineLogo,
//   flightTime,
//   layoverTime,
// }
{flightLegs=[]}
) => {
  return (
    // <div className="p-4 space-y-4">
    //   <div className="flight-section">
    //     <div className="flex items-center">
    //       <span className="font-bold">{departureAirport}</span>
    //       <span className="ml-auto">{departureCode}</span>
    //     </div>
    //     <div className="text-sm text-gray-500">Flight time {flightTime}</div>
    //     {layoverTime && (
    //       <div className="text-sm text-gray-500">
    //         Layover: {layoverTime}
    //       </div>
    //     )}
    //   </div>
    //   <div className="flight-section">
    //     <div className="flex items-center">
    //       <span className="font-bold">{arrivalAirport}</span>
    //       <span className="ml-auto">{arrivalCode}</span>
    //     </div>
    //   </div>
    //   <div className="airline-info flex items-center space-x-2">
    //     <Image src={airlineLogo} alt={`${airlineName} logo`} className="w-6 h-6" />
    //     <span>{airlineName}</span>
    //   </div>
    // </div>
    <div className="p-4 space-y-6">
    {flightLegs?.map((leg, index) => (
      <div key={index} className="relative">
        {/* Timeline marker */}
        <div className="flex items-center space-x-2">
          <div className="timeline-marker w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Flight leg information */}
        <div className="pl-6 mt-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold">{leg.departureAirport}</span>
              <div className="text-sm text-gray-500">
                Flight time {leg.flightTime}
              </div>
            </div>
            <div className="text-sm font-medium">{leg.departureCode}</div>
          </div>

          {leg.layoverTime && (
            <div className="text-sm text-gray-500 mt-1">
              Layover: {leg.layoverTime}
            </div>
          )}

          <div className="mt-4 flex justify-between items-center">
            <span className="font-bold">{leg.arrivalAirport}</span>
            <span className="text-sm font-medium">{leg.arrivalCode}</span>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <Image
              src={leg.airlineLogo}
              alt={`${leg.airlineName} logo`}
              className="w-6 h-6"
            />
            <span>{leg.airlineName}</span>
          </div>
        </div>

        {/* Add a connecting line if there are more flight legs */}
        {index < flightLegs.length - 1 && (
          <div className="ml-1 h-12 border-l-2 border-gray-300"></div>
        )}
      </div>
    ))}
  </div>
  );
};

export default Sidebar;
