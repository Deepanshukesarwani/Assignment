
interface Flight {
  id: string;
  code: string;
  airline_name: string;
  time: string;
  date: string;
  price: number;
  travelling_time: string;
  stops: string[];
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
  flights: FlightSchedule[];
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
        "flights": [
          {
            "arrival": [
              {
                "id": "FL001",
                "code": "AI101",
                "airline_name": "Air India",
                "time": "10:30 AM",
                "date": "2024-10-12",
                "price": 2500,
                "travelling_time": "2h 30m",
                "stops": ["ST001", "ST002"]
              },
              {
                "id": "FL002",
                "code": "AI102",
                "airline_name": "IndiGo",
                "time": "5:00 PM",
                "date": "2024-10-12",
                "price": 3000,
                "travelling_time": "3h",
                "stops": []
              },
              {
                "id": "FL003",
                "code": "SG201",
                "airline_name": "SpiceJet",
                "time": "11:00 AM",
                "date": "2024-10-13",
                "price": 2000,
                "travelling_time": "2h 15m",
                "stops": []
              },
              {
                "id": "FL004",
                "code": "AI103",
                "airline_name": "Air India",
                "time": "3:30 PM",
                "date": "2024-10-13",
                "price": 3200,
                "travelling_time": "3h",
                "stops": ["ST003"]
              },
              {
                "id": "FL005",
                "code": "6E301",
                "airline_name": "IndiGo",
                "time": "8:45 AM",
                "date": "2024-10-14",
                "price": 2700,
                "travelling_time": "2h 30m",
                "stops": []
              }
            ],
            "departure": [
              {
                "id": "FL006",
                "code": "AI107",
                "airline_name": "Air India",
                "time": "7:30 AM",
                "date": "2024-10-12",
                "price": 2200,
                "travelling_time": "2h 30m",
                "stops": []
              },
              {
                "id": "FL007",
                "code": "SG203",
                "airline_name": "SpiceJet",
                "time": "2:00 PM",
                "date": "2024-10-12",
                "price": 2500,
                "travelling_time": "3h",
                "stops": ["ST006"]
              },
              {
                "id": "FL008",
                "code": "AI108",
                "airline_name": "Air India",
                "time": "8:00 AM",
                "date": "2024-10-13",
                "price": 2700,
                "travelling_time": "3h",
                "stops": []
              },
              {
                "id": "FL009",
                "code": "6E304",
                "airline_name": "IndiGo",
                "time": "12:15 PM",
                "date": "2024-10-13",
                "price": 2900,
                "travelling_time": "2h 45m",
                "stops": ["ST007"]
              },
              {
                "id": "FL010",
                "code": "AI109",
                "airline_name": "Air India",
                "time": "3:00 PM",
                "date": "2024-10-14",
                "price": 2400,
                "travelling_time": "3h",
                "stops": []
              }
            ]
          }
        ]
      },
      {
        "id": "AP002",
        "name": "Chhatrapati Shivaji Maharaj International Airport",
        "code": "BOM",
        "country": "India",
        "city": "Mumbai",
        "flights": [
          {
            "arrival": [
              {
                "id": "FL011",
                "code": "AI201",
                "airline_name": "Air India",
                "time": "9:00 AM",
                "date": "2024-10-12",
                "price": 2600,
                "travelling_time": "3h",
                "stops": ["ST009"]
              },
              {
                "id": "FL012",
                "code": "SG301",
                "airline_name": "SpiceJet",
                "time": "12:30 PM",
                "date": "2024-10-12",
                "price": 2300,
                "travelling_time": "2h 45m",
                "stops": []
              },
              {
                "id": "FL013",
                "code": "6E401",
                "airline_name": "IndiGo",
                "time": "4:30 PM",
                "date": "2024-10-13",
                "price": 2200,
                "travelling_time": "3h",
                "stops": []
              },
              {
                "id": "FL014",
                "code": "AI202",
                "airline_name": "Air India",
                "time": "6:00 PM",
                "date": "2024-10-13",
                "price": 3200,
                "travelling_time": "3h 30m",
                "stops": ["ST010"]
              },
              {
                "id": "FL015",
                "code": "SG302",
                "airline_name": "SpiceJet",
                "time": "7:45 AM",
                "date": "2024-10-14",
                "price": 2800,
                "travelling_time": "3h",
                "stops": []
              }
            ],
            "departure": [
              {
                "id": "FL016",
                "code": "AI205",
                "airline_name": "Air India",
                "time": "6:30 AM",
                "date": "2024-10-12",
                "price": 2200,
                "travelling_time": "3h",
                "stops": []
              },
              {
                "id": "FL017",
                "code": "SG304",
                "airline_name": "SpiceJet",
                "time": "12:00 PM",
                "date": "2024-10-12",
                "price": 2600,
                "travelling_time": "3h 15m",
                "stops": ["ST012"]
              },
              {
                "id": "FL018",
                "code": "6E404",
                "airline_name": "IndiGo",
                "time": "3:30 PM",
                "date": "2024-10-13",
                "price": 2400,
                "travelling_time": "3h",
                "stops": []
              },
              {
                "id": "FL019",
                "code": "AI206",
                "airline_name": "Air India",
                "time": "6:15 PM",
                "date": "2024-10-13",
                "price": 3200,
                "travelling_time": "3h",
                "stops": ["ST013"]
              },
              {
                "id": "FL020",
                "code": "SG305",
                "airline_name": "SpiceJet",
                "time": "7:45 AM",
                "date": "2024-10-14",
                "price": 2800,
                "travelling_time": "3h",
                "stops": []
              }
            ]
          }
        ]
      },
      {
        "id": "AP003",
        "name": "John F. Kennedy International Airport",
        "code": "JFK",
        "country": "USA",
        "city": "New York",
        "flights": [
          {
            "arrival": [
              {
                "id": "FL021",
                "code": "DL401",
                "airline_name": "Delta",
                "time": "10:00 AM",
                "date": "2024-10-12",
                "price": 550,
                "travelling_time": "5h",
                "stops": []
              },
              {
                "id": "FL022",
                "code": "AA101",
                "airline_name": "American Airlines",
                "time": "2:00 PM",
                "date": "2024-10-12",
                "price": 600,
                "travelling_time": "5h 15m",
                "stops": []
              },
              {
                "id": "FL023",
                "code": "UA302",
                "airline_name": "United Airlines",
                "time": "4:30 PM",
                "date": "2024-10-13",
                "price": 650,
                "travelling_time": "5h",
                "stops": ["ST100"]
              }
            ],
            "departure": [
              {
                "id": "FL024",
                "code": "DL402",
                "airline_name": "Delta",
                "time": "6:00 AM",
                "date": "2024-10-14",
                "price": 550,
                "travelling_time": "5h",
                "stops": []
              },
              {
                "id": "FL025",
                "code": "AA102",
                "airline_name": "American Airlines",
                "time": "9:00 AM",
                "date": "2024-10-14",
                "price": 600,
                "travelling_time": "5h",
                "stops": []
              },
              {
                "id": "FL026",
                "code": "UA303",
                "airline_name": "United Airlines",
                "time": "12:30 PM",
                "date": "2024-10-14",
                "price": 700,
                "travelling_time": "5h",
                "stops": []
              }
            ]
          }
        ]
      },
      {
        "id": "AP004",
        "name": "Los Angeles International Airport",
        "code": "LAX",
        "country": "USA",
        "city": "Los Angeles",
        "flights": [
          {
            "arrival": [
              {
                "id": "FL027",
                "code": "DL501",
                "airline_name": "Delta",
                "time": "11:00 AM",
                "date": "2024-10-12",
                "price": 530,
                "travelling_time": "4h 30m",
                "stops": []
              },
              {
                "id": "FL028",
                "code": "AA201",
                "airline_name": "American Airlines",
                "time": "1:30 PM",
                "date": "2024-10-12",
                "price": 580,
                "travelling_time": "4h 45m",
                "stops": []
              },
              {
                "id": "FL029",
                "code": "UA403",
                "airline_name": "United Airlines",
                "time": "3:45 PM",
                "date": "2024-10-13",
                "price": 620,
                "travelling_time": "5h",
                "stops": []
              }
            ],
            "departure": [
              {
                "id": "FL030",
                "code": "DL502",
                "airline_name": "Delta",
                "time": "7:00 AM",
                "date": "2024-10-14",
                "price": 520,
                "travelling_time": "4h 30m",
                "stops": []
              },
              {
                "id": "FL031",
                "code": "AA202",
                "airline_name": "American Airlines",
                "time": "10:00 AM",
                "date": "2024-10-14",
                "price": 570,
                "travelling_time": "4h 45m",
                "stops": []
              }
            ]
          }
        ]
      },
      {
        "id": "AP006",
        "name": "Dubai International Airport",
        "code": "DXB",
        "country": "Dubai",
        "city": "Dubai",
        "flights": [
          {
            "arrival": [
              {
                "id": "FL036",
                "code": "EK701",
                "airline_name": "Emirates",
                "time": "8:00 AM",
                "date": "2024-10-12",
                "price": 450,
                "travelling_time": "4h",
                "stops": []
              },
              {
                "id": "FL037",
                "code": "QR401",
                "airline_name": "Qatar Airways",
                "time": "11:30 AM",
                "date": "2024-10-12",
                "price": 480,
                "travelling_time": "3h 45m",
                "stops": ["ST101"]
              },
              {
                "id": "FL038",
                "code": "EY301",
                "airline_name": "Etihad Airways",
                "time": "2:45 PM",
                "date": "2024-10-13",
                "price": 500,
                "travelling_time": "3h 30m",
                "stops": []
              },
              {
                "id": "FL039",
                "code": "EK702",
                "airline_name": "Emirates",
                "time": "5:00 PM",
                "date": "2024-10-13",
                "price": 520,  
                "travelling_time": "4h",
                "stops": ["ST102"]
              },
              {
                "id": "FL040",
                "code": "QR402",
                "airline_name": "Qatar Airways",
                "time": "9:00 AM",
                "date": "2024-10-14",
                "price": 460,
                "travelling_time": "3h 45m",
                "stops": []
              }
            ],
            "departure": [
              {
                "id": "FL041",
                "code": "EK703",
                "airline_name": "Emirates",
                "time": "6:30 AM",
                "date": "2024-10-12",
                "price": 470,
                "travelling_time": "4h",
                "stops": []
              },
              {
                "id": "FL042",
                "code": "EY302",
                "airline_name": "Etihad Airways",
                "time": "12:00 PM",
                "date": "2024-10-12",
                "price": 490,
                "travelling_time": "3h 30m",
                "stops": ["ST103"]
              },
              {
                "id": "FL043",
                "code": "QR403",
                "airline_name": "Qatar Airways",
                "time": "3:30 PM",
                "date": "2024-10-13",
                "price": 510,
                "travelling_time": "3h 45m",
                "stops": []
              },
              {
                "id": "FL044",
                "code": "EK704",
                "airline_name": "Emirates",
                "time": "6:15 PM",
                "date": "2024-10-13",
                "price": 530,
                "travelling_time": "4h",
                "stops": ["ST104"]
              },
              {
                "id": "FL045",
                "code": "EY303",
                "airline_name": "Etihad Airways",
                "time": "8:45 AM",
                "date": "2024-10-14",
                "price": 460,
                "travelling_time": "3h 30m",
                "stops": []
              }
            ]
          }
        ]
      }      
    ]
  export {airports};
  