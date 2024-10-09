
interface Flight {
  id: string;
  flightNumber: string;
  airlineName: string;
  arrivalTime: string;
  date: string;
  price: number;
  duration: string;
  stops: string;
  arrival_airport_id?:string;
  departure_airport_id?: string
}

interface FlightSchedule {
  arrival: Flight[];
  departure: Flight[];
}

interface Airport {
  id: string;
  name: string;
  code: string;
  country: string;
  city: string;
  flights?: FlightSchedule[];
}

// Define the type for the data array
type AirportsData = Airport[];

   const airports: AirportsData =[
      {
        "id": "AP001",
        "name": "Indira Gandhi International Airport",
        "code": "DEL",
        "country": "India",
        "city": "New Delhi",
        // "flights": [
        //   {
        //     "arrival": [
        //       {
        //         "id": "FL001",
        //         "flightNumber": "AI101",
        //         "airlineName": "Air India",
        //         "arrivalTime": "10:30 AM",
        //         "date": "2024-10-12",
        //         "price": 2500,
        //         "duration": "2h 30m",
        //         "stops": "Non stop",
        //         "arrival_airport_id": "AP002",
        //       },
        //       {
        //         "id": "FL004",
        //         "flightNumber": "AI103",
        //         "airlineName": "Air India",
        //         "arrivalTime": "3:30 PM",
        //         "date": "2024-10-13",
        //         "price": 3200,
        //         "duration": "3h",
        //         "stops": "1 stop",
        //         "arrival_airport_id": "AP003",
        //       },
        //     ],
        //     "departure": [
        //       {
        //         "id": "FL006",
        //         "flightNumber": "AI107",
        //         "airlineName": "Air India",
        //         "arrivalTime": "7:30 AM",
        //         "date": "2024-10-12",
        //         "price": 2200,
        //         "duration": "2h 30m",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP004"
        //       },
        //       {
        //         "id": "FL007",
        //         "flightNumber": "SG203",
        //         "airlineName": "SpiceJet",
        //         "arrivalTime": "2:00 PM",
        //         "date": "2024-10-12",
        //         "price": 2500,
        //         "duration": "3h",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP005"
        //       },
        //     ]
        //   }
        // ]
      },
      {
        "id": "AP002",
        "name": "Netaji Subhas Chandra Bose International Airport",
        "code": "CCU",
        "country": "India",
        "city": "Kolkata",
        // "flights": [
        //   {
        //     "arrival": [
        //       {
        //         "id": "FL013",
        //         "flightNumber": "AI301",
        //         "airlineName": "Air India",
        //         "arrivalTime": "12:30 PM",
        //         "date": "2024-10-12",
        //         "price": 2600,
        //         "duration": "2h 45m",
        //         "stops": "2 stops",
        //         "arrival_airport_id": "AP004",
        //       }
        //     ],
        //     "departure": [
        //       {
        //         "id": "FL014",
        //         "flightNumber": "6E401",
        //         "airlineName": "IndiGo",
        //         "arrivalTime": "5:00 PM",
        //         "date": "2024-10-12",
        //         "price": 2400,
        //         "duration": "3h",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP001"
        //       }
        //     ]
        //   }
        // ]
      },
      {
        "id": "AP003",
        "name": "Chennai International Airport",
        "code": "MAA",
        "country": "India",
        "city": "Chennai",
        // "flights": [
        //   {
        //     "arrival": [
        //       {
        //         "id": "FL015",
        //         "flightNumber": "AI401",
        //         "airlineName": "Air India",
        //         "arrivalTime": "1:15 PM",
        //         "date": "2024-10-12",
        //         "price": 2900,
        //         "duration": "2h 50m",
        //         "stops": "Non-stop",
        //         "arrival_airport_id": "AP002",
        //       }
        //     ],
        //     "departure": [
        //       {
        //         "id": "FL016",
        //         "flightNumber": "SG305",
        //         "airlineName": "SpiceJet",
        //         "arrivalTime": "3:45 PM",
        //         "date": "2024-10-12",
        //         "price": 2300,
        //         "duration": "3h 10m",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP004"
        //       }
        //     ]
        //   }
        // ]
      },
      {
        "id": "AP004",
        "name": "Rajiv Gandhi International Airport",
        "code": "HYD",
        "country": "India",
        "city": "Hyderabad",
        // "flights": [
        //   {
        //     "arrival": [
        //       {
        //         "id": "FL017",
        //         "flightNumber": "AI501",
        //         "airlineName": "Air India",
        //         "arrivalTime": "11:00 AM",
        //         "date": "2024-10-12",
        //         "price": 2700,
        //         "duration": "2h 30m",
        //         "stops":"Non-stop",
        //         "arrival_airport_id": "AP002",
        //       }
        //     ],
        //     "departure": [
        //       {
        //         "id": "FL018",
        //         "flightNumber": "6E501",
        //         "airlineName": "IndiGo",
        //         "arrivalTime": "4:00 PM",
        //         "date": "2024-10-12",
        //         "price": 2200,
        //         "duration": "3h",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP002"
        //       }
        //     ]
        //   }
        // ]
      },
      {
        "id": "AP005",
        "name": "Chhatrapati Shivaji Maharaj International Airport",
        "code": "BOM",
        "country": "India",
        "city": "Mumbai",
        // "flights": [
        //   {
        //     "arrival": [
        //       {
        //         "id": "FL011",
        //         "flightNumber": "AI201",
        //         "airlineName": "Air India",
        //         "arrivalTime": "9:00 AM",
        //         "date": "2024-10-12",
        //         "price": 2600,
        //         "duration": "3h",
        //         "stops": "Non-stop",
        //         "arrival_airport_id": "AP002",
        //       },
        //       {
        //         "id": "FL012",
        //         "flightNumber": "SG301",
        //         "airlineName": "SpiceJet",
        //         "arrivalTime": "12:30 PM",
        //         "date": "2024-10-12",
        //         "price": 2300,
        //         "duration": "2h 45m",
        //         "stops":"Non-stop",
        //         "arrival_airport_id": "AP001",
        //       },
        //       {
        //         "id": "FL013",
        //         "flightNumber": "6E401",
        //         "airlineName": "IndiGo",
        //         "arrivalTime": "4:30 PM",
        //         "date": "2024-10-13",
        //         "price": 2200,
        //         "duration": "3h",
        //         "stops": "Non-stop",
        //         "arrival_airport_id": "AP004",
        //       },
        //     ],
        //     "departure": [
        //       {
        //         "id": "FL016",
        //         "flightNumber": "AI205",
        //         "airlineName": "Air India",
        //         "arrivalTime": "6:30 AM",
        //         "date": "2024-10-12",
        //         "price": 2200,
        //         "duration": "3h",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP004"
        //       },
        //       {
        //         "id": "FL017",
        //         "flightNumber": "SG304",
        //         "airlineName": "SpiceJet",
        //         "arrivalTime": "12:00 PM",
        //         "date": "2024-10-12",
        //         "price": 2600,
        //         "duration": "3h 15m",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP006"

        //       },
        //       {
        //         "id": "FL018",
        //         "flightNumber": "6E404",
        //         "airlineName": "IndiGo",
        //         "arrivalTime": "3:30 PM",
        //         "date": "2024-10-13",
        //         "price": 2400,
        //         "duration": "3h",
        //         "stops":"Non-stop",
        //         "departure_airport_id": "AP002"
        //       },
        //     ]
        //   }
        // ]
      },
      {
        "id": "AP006",
        "name": "John F. Kennedy International Airport",
        "code": "JFK",
        "country": "USA",
        "city": "New York",
        // "flights": [
        //   {
        //     "arrival": [
        //       {
        //         "id": "FL021",
        //         "flightNumber": "DL401",
        //         "airlineName": "Delta",
        //         "arrivalTime": "10:00 AM",
        //         "date": "2024-10-12",
        //         "price": 550,
        //         "duration": "5h",
        //         "stops": "Non-stop",
        //         "arrival_airport_id": "AP002",
        //       },
        //       {
        //         "id": "FL022",
        //         "flightNumber": "AA101",
        //         "airlineName": "American Airlines",
        //         "arrivalTime": "2:00 PM",
        //         "date": "2024-10-12",
        //         "price": 600,
        //         "duration": "5h 15m",
        //         "stops": "Non-stop",
        //         "arrival_airport_id": "AP001",
        //       },
        //       {
        //         "id": "FL023",
        //         "flightNumber": "UA302",
        //         "airlineName": "United Airlines",
        //         "arrivalTime": "4:30 PM",
        //         "date": "2024-10-13",
        //         "price": 650,
        //         "duration": "5h",
        //         "stops": "Non-stop",
        //         "arrival_airport_id": "AP003",
        //       }
        //     ],
        //     "departure": [
        //       {
        //         "id": "FL024",
        //         "flightNumber": "DL402",
        //         "airlineName": "Delta",
        //         "arrivalTime": "6:00 AM",
        //         "date": "2024-10-14",
        //         "price": 550,
        //         "duration": "5h",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP004"
        //       },
        //       {
        //         "id": "FL025",
        //         "flightNumber": "AA102",
        //         "airlineName": "American Airlines",
        //         "arrivalTime": "9:00 AM",
        //         "date": "2024-10-14",
        //         "price": 600,
        //         "duration": "5h",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP005"
        //       },
        //       {
        //         "id": "FL026",
        //         "flightNumber": "UA303",
        //         "airlineName": "United Airlines",
        //         "arrivalTime": "12:30 PM",
        //         "date": "2024-10-14",
        //         "price": 700,
        //         "duration": "5h",
        //         "stops":"Non-stop",
        //         "departure_airport_id": "AP001"
        //       }
        //     ]
        //   }
        // ]
      },
      {
        "id": "AP007",
        "name": "Los Angeles International Airport",
        "code": "LAX",
        "country": "USA",
        "city": "Los Angeles",
        // "flights": [
        //   {
        //     "arrival": [
        //       {
        //         "id": "FL027",
        //         "flightNumber": "DL501",
        //         "airlineName": "Delta",
        //         "arrivalTime": "11:00 AM",
        //         "date": "2024-10-12",
        //         "price": 530,
        //         "duration": "4h 30m",
        //         "stops": "Non-stop",
        //         "arrival_airport_id": "AP002"
        //       },
        //       {
        //         "id": "FL028",
        //         "flightNumber": "AA201",
        //         "airlineName": "American Airlines",
        //         "arrivalTime": "1:30 PM",
        //         "date": "2024-10-12",
        //         "price": 580,
        //         "duration": "4h 45m",
        //         "stops": "1 stop",
        //         "arrival_airport_id": "AP001",
        //       },
        //     ],
        //     "departure": [
        //       {
        //         "id": "FL030",
        //         "flightNumber": "DL502",
        //         "airlineName": "Delta",
        //         "arrivalTime": "7:00 AM",
        //         "date": "2024-10-14",
        //         "price": 520,
        //         "duration": "4h 30m",
        //         "stops": "1 stop",
        //         "departure_airport_id": "AP004"
        //       },
        //       {
        //         "id": "FL031",
        //         "flightNumber": "AA202",
        //         "airlineName": "American Airlines",
        //         "arrivalTime": "10:00 AM",
        //         "date": "2024-10-14",
        //         "price": 570,
        //         "duration": "4h 45m",
        //         "stops": "1 stop",
        //         "departure_airport_id": "AP003"
        //       }
        //     ]
        //   }
        // ]
      },
      {
        "id": "AP008",
        "name": "Dubai International Airport",
        "code": "DXB",
        "country": "Dubai",
        "city": "Dubai",
        // "flights": [
        //   {
        //     "arrival": [
        //       {
        //         "id": "FL036",
        //         "flightNumber": "EK701",
        //         "airlineName": "Emirates",
        //         "arrivalTime": "8:00 AM",
        //         "date": "2024-10-12",
        //         "price": 450,
        //         "duration": "4h",
        //         "stops": "1 stop",
        //         "arrival_airport_id": "AP007",
        //       },
        //       {
        //         "id": "FL037",
        //         "flightNumber": "QR401",
        //         "airlineName": "Qatar Airways",
        //         "arrivalTime": "11:30 AM",
        //         "date": "2024-10-12",
        //         "price": 480,
        //         "duration": "3h 45m",
        //         "stops": "1 stop",
        //         "arrival_airport_id": "AP006",
        //       },
        //     ],
        //     "departure": [
        //       {
        //         "id": "FL041",
        //         "flightNumber": "EK703",
        //         "airlineName": "Emirates",
        //         "arrivalTime": "6:30 AM",
        //         "date": "2024-10-12",
        //         "price": 470,
        //         "duration": "4h",
        //         "stops":"1 stop",
        //         "departure_airport_id": "AP004"
        //       },
        //       {
        //         "id": "FL042",
        //         "flightNumber": "EY302",
        //         "airlineName": "Etihad Airways",
        //         "arrivalTime": "12:00 PM",
        //         "date": "2024-10-12",
        //         "price": 490,
        //         "duration": "3h 30m",
        //         "stops": "1 stop",
        //         "departure_airport_id": "AP001"
        //       },
        //       {
        //         "id": "FL043",
        //         "flightNumber": "QR403",
        //         "airlineName": "Qatar Airways",
        //         "arrivalTime": "3:30 PM",
        //         "date": "2024-10-13",
        //         "price": 510,
        //         "duration": "3h 45m",
        //         "stops": "Non-stop",
        //         "departure_airport_id": "AP006"
        //       },
        //     ]
        //   }
        // ]
      }      
    ]
  export {airports};