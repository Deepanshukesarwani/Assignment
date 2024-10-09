import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { StaticImageData } from 'next/image';
// interface Flight {
//   airlineLogo: string; // The airline's logo (URL or image path)
//   airlineName: string; // Name of the airline
//   flightNumber: string; // Flight number
//   arrivalTime: string; // Arrival time of the flight
//   duration: string; // Flight duration
//   stops: string; // Stopover information (e.g., "Non stop", "1 stop")
//   price: string; // Price of the flight (e.g., "AED 4,200.30")
//   departureAirport: string; // Name of the departure airport
//   departureCode: string; // IATA code of the departure airport (e.g., "LHR")
//   arrivalAirport: string; // Name of the arrival airport
//   arrivalCode: string; // IATA code of the arrival airport (e.g., "JFK")
//   flightTime: string; // Total flight time (e.g., "8h 30m")
//   id: string;
//   date: string;
//   arrival_airport_id?:string;
//   departure_airport_id?: string;

// }
interface AirportData {
  id: string;
  name: string;
  code: string;
  country: string;
  city: string;
  // flights?: Flight[]; // You can define the flight structure if needed
}

interface FlightStoreState {
  departure: AirportData | null;
  destination: AirportData | null;
  whereFrom: string | null;
  whereTo: string | null;
  departureDate: Date | null;
  returnDate: Date | null;
  isloading: boolean;
  selectedFlight: FlightDataSchema | null;
  updateDeparture: (departure: AirportData) => void;
  updateDestination: (destination: AirportData) => void;
  updateWhereFrom: (whereFrom: string) => void;
  updateWhereTo: (whereTo: string) => void;
  updateDepartureDate: (departureDate: Date | null) => void;
  updateReturnDate: (returnDate: Date | null) => void;
  updateIsloading: (isloading: boolean) => void;
  updateSelectedFlight: (flight: FlightDataSchema) => void;
}

export interface FlightDataSchema {
  airlineLogo: string | StaticImageData;
  airlineName: string;
  flightNumber: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  price: string;
  departureAirport: string;
  departureCode: string;
  arrivalAirport: string;
  arrivalCode: string;
  flightTime: string;
  layoverTime?: string;
}
const useFlightStore = create(
  persist<FlightStoreState>(
    (set) => ({
      departure: null,
      destination: null,
      whereFrom: null,
      whereTo: null,
      departureDate: null,
      returnDate: null,
      isloading: false,
      selectedFlight: null,
      updateDeparture: (departure: AirportData) => set({ departure }),
      updateDestination: (destination: AirportData) => set({ destination }),
      updateWhereTo: (whereTo: string) => set({ whereTo }),
      updateWhereFrom: (whereFrom: string) => set({ whereFrom }),
      updateDepartureDate: (departureDate: Date | null) => set({ departureDate }),
      updateReturnDate: (returnDate: Date | null) => set({ returnDate }),
      updateIsloading: (isloading: boolean) => set({ isloading }),
      updateSelectedFlight: (flight: FlightDataSchema) => set({ selectedFlight: flight }),
    }),
    {
      name: 'flight-storage', // Name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // Use createJSONStorage for proper parsing
    }
  )
);

export { useFlightStore};

