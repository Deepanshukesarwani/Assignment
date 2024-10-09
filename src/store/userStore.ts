import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AirportData {
  id: string;
  name: string;
  code: string;
  country: string;
  city: string;
  flights: any[]; // You can define the flight structure if needed
}

interface FlightStoreState {
  departure: AirportData | null;
  destination: AirportData | null;
  whereFrom: string | null;
  whereTo: string | null;
  departureDate: Date | null;
  returnDate: Date | null;
  isloading: boolean;
  selectedFlight: FlightData | null;
  updateDeparture: (departure: AirportData) => void;
  updateDestination: (destination: AirportData) => void;
  updateWhereFrom: (whereFrom: string) => void;
  updateWhereTo: (whereTo: string) => void;
  updateDepartureDate: (departureDate: Date) => void;
  updateReturnDate: (returnDate: Date) => void;
  updateIsloading: (isloading: boolean) => void;
  updateSelectedFlight: (flight: FlightData) => void;
}

interface FlightData {
  airlineLogo: string;
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
      updateDepartureDate: (departureDate: Date) => set({ departureDate }),
      updateReturnDate: (returnDate: Date) => set({ returnDate }),
      updateIsloading: (isloading: boolean) => set({ isloading }),
      updateSelectedFlight: (flight: FlightData) => set({ selectedFlight: flight }),
    }),
    {
      name: 'flight-storage', // Name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // Use createJSONStorage for proper parsing
    }
  )
);

export { useFlightStore };

