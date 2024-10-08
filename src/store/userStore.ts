// import { create } from 'zustand';

// interface AirportData {
//   id: string;
//   name: string;
//   code: string;
//   country: string;
//   city: string;
//   flights: any[]; // You can define the flight structure if needed
// }

// interface FlightStoreState {
//   departure: AirportData | null;
//   destination: AirportData | null;
//   whereFrom:string | null;
//   whereTo:string| null;
//   departureDate:Date | null,
//   returnDate:Date | null,
//   isloading:boolean | null,
//   updateDeparture: (departure: AirportData) => void;
//   updateDestination: (destination: AirportData) => void;
//   updateWhereFrom:(whereFrom:string)=>void;
//   updateWhereTo:(whereTo:string)=>void;
//   updateDepartureDate:(departureDate:Date)=>void;
//   updateReturnDate:( returnDate:Date)=>void;
//   updateIsloading:(isloading:boolean)=>void;

// }

// const useFlightStore = create<FlightStoreState>((set) => ({
//   departure: null, // Change from empty string to null for no initial value
//   destination: null,
//   whereFrom:null,
//   whereTo:null,
//   departureDate:null,
//   returnDate:null,
//   isloading:false,
//   updateDeparture: (departure: AirportData) => set({ departure }),
//   updateDestination: (destination: AirportData) => set({ destination }),
//   updateWhereTo:(whereTo:string)=>set(({whereTo:whereTo})),
//   updateWhereFrom:(whereFrom:string)=>set({whereFrom:whereFrom}),
//   updateDepartureDate:(departureDate:Date | null)=>set(({departureDate:departureDate})),
//   updateReturnDate:(returnDate:Date | null)=>set(({returnDate:returnDate})),
//   updateIsloading:(isloading:boolean)=>set(({isloading:isloading})),
// }));

// export { useFlightStore };

// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface AirportData {
//   id: string;
//   name: string;
//   code: string;
//   country: string;
//   city: string;
//   flights: any[]; // You can define the flight structure if needed
// }

// interface FlightStoreState {
//   departure: AirportData | null;
//   destination: AirportData | null;
//   whereFrom: string | null;
//   whereTo: string | null;
//   departureDate: Date | null;
//   returnDate: Date | null;
//   isloading: boolean;
//   updateDeparture: (departure: AirportData) => void;
//   updateDestination: (destination: AirportData) => void;
//   updateWhereFrom: (whereFrom: string) => void;
//   updateWhereTo: (whereTo: string) => void;
//   updateDepartureDate: (departureDate: Date) => void;
//   updateReturnDate: (returnDate: Date) => void;
//   updateIsloading: (isloading: boolean) => void;
// }

// const useFlightStore = create(
//     persist<FlightStoreState>(
//       (set) => ({
//         departure: null,
//         destination: null,
//         whereFrom: null,
//         whereTo: null,
//         departureDate: null,
//         returnDate: null,
//         isloading: false,
//         updateDeparture: (departure: AirportData) => set({ departure }),
//         updateDestination: (destination: AirportData) => set({ destination }),
//         updateWhereTo: (whereTo: string) => set({ whereTo }),
//         updateWhereFrom: (whereFrom: string) => set({ whereFrom }),
//         updateDepartureDate: (departureDate: Date) => set({ departureDate }),
//         updateReturnDate: (returnDate: Date) => set({ returnDate }),
//         updateIsloading: (isloading: boolean) => set({ isloading }),
//       }),
//       {
//         name: 'flight-storage', // Name of the item in localStorage
//         storage: localStorage, // This is the correct property
//       }
//     )
//   );

// export { useFlightStore };


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
  updateDeparture: (departure: AirportData) => void;
  updateDestination: (destination: AirportData) => void;
  updateWhereFrom: (whereFrom: string) => void;
  updateWhereTo: (whereTo: string) => void;
  updateDepartureDate: (departureDate: Date) => void;
  updateReturnDate: (returnDate: Date) => void;
  updateIsloading: (isloading: boolean) => void;
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
      updateDeparture: (departure: AirportData) => set({ departure }),
      updateDestination: (destination: AirportData) => set({ destination }),
      updateWhereTo: (whereTo: string) => set({ whereTo }),
      updateWhereFrom: (whereFrom: string) => set({ whereFrom }),
      updateDepartureDate: (departureDate: Date) => set({ departureDate }),
      updateReturnDate: (returnDate: Date) => set({ returnDate }),
      updateIsloading: (isloading: boolean) => set({ isloading }),
    }),
    {
      name: 'flight-storage', // Name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // Use createJSONStorage for proper parsing
    }
  )
);

export { useFlightStore };

