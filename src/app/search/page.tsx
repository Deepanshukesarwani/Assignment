"use client";
import React from "react";
import Index from "../majorComponents/search.components";
import TopSheet from "../majorComponents/Sheet/TopSheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Cross from "/public/icons/cross.png";
import { CircleX } from "lucide-react";
import { useRouter } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { FlightCard } from "../majorComponents/Fights/Flightcard";
import RightSheet from "../majorComponents/Sheet/RightSheet";

export default function Home() {

  const route=useRouter();
    const handleSelectFlight = (flight: any) => {
        console.log("Selected flight:", flight);
      };
  return (
    <div>
      {/* <Index/> */}
      <nav className=" flex flex-col justify-between items-center  ">
        <Card className="w-[100%] p-[0.5rem] rounded-none mb-2">
          <CardContent className="flex justify-between">
            <TopSheet />
            <Button
              variant="outline"
              size="icon"
              className="bg-white border-none"
            >
              <CircleX className="h-5 w-5 text-gray-700" onClick={()=>route.push("/")} />
            </Button>
          </CardContent>
        </Card>
      </nav>
      {/* top sheet  this is seperate component  */}

      {/* loading content  this is also seperate component  */}

      {/* after loading content   many individual card which open as right sheet we have to\ */}
      {/* map with the flights  */}

      {/* here i want to place RightSheet  */}
      <div className="space-y-2 p-[4rem] pt-0 pb-0">
      <RightSheet/>
    </div>

      {/* there is a fight card which on click individual card open right sheet  */}
    </div>
  );
}
