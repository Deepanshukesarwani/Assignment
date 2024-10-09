"use client";
import React,{useState,useEffect} from "react";
// import Index from "../majorComponents/search.components";
import TopSheet from "../majorComponents/Sheet/TopSheet";
import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Cross from "/public/icons/cross.png";
// import { CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";
// import { FlightCard } from "../majorComponents/Fights/Flightcard";
import RightSheet from "../majorComponents/Sheet/RightSheet";
import { SkeletonDemo } from "../majorComponents/LoadingScreen/Skeleton";
import { LinearLoader } from "../majorComponents/LoadingScreen/linearLoading";
import { useFlightStore } from "@/store/userStore";
import LoadingComponent from "../majorComponents/LoadingScreen/Loading";

export default function Home() {
  const route = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const loading = useFlightStore((state) => state.isloading);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="h-screen">
      {/* Navbar  */}
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-col justify-center h-[15%] p-0 mb-2 bg-white shadow-md">
        <Card className="w-[100%] h-[99%] p-[1rem] flex justify-center items-center  rounded-none">
          <CardContent className="w-[90%] pt-4">
            <div className="flex items-center justify-between  w-[100%] pt-4 pr-5">
              <TopSheet />
              <Button
                variant="outline"
                size="icon"
                className="bg-white border-2 border-gray-200 rounded-full"
              >
                <X
                  className="h-5 w-5 text-gray-400"
                  onClick={() => route.push("/")}
                />
              </Button>
            </div>
          </CardContent>
        </Card>
        {loading ? (
          <div className="h-[1%]">
            <LinearLoader />
          </div>
        ) : null}
      </nav>

      {/* .............................................................................................................       */}
      {/* top sheet  this is seperate component  */}

      {/* loading content  this is also seperate component  */}

      {/* after loading content   many individual card which open as right sheet we have to\ */}
      {/* map with the flights  */}

      {/* here i want to place RightSheet  */}
      {/* Loading Content */}
      <div className="h-[85%] mt-28">
        {loading ? (
          <div className="flex fixed flex-col mt-[-48px] items-center justify-center space-y-2 h-[100%]">
            {/* <Image src={CenterImg} alt="imge" className=" absolute"/> */}
            <div className=" relative w-screen">
              <LoadingComponent />
              {/* <h1>iugui</h1> */}
            </div>
            {Array.from({ length: 3 }, (_, index) => (
              <SkeletonDemo key={index} /> // Render SkeletonDemo three times
            ))}
          </div>
        ) : (
          <div className="space-y-2 p-[10rem] pt-0 pb-0 ">
            <span className="text-gray-400">Showing Results..</span>
            <RightSheet />
          </div>
        )}
      </div>

      {/* there is a fight card which on click individual card open right sheet  */}
    </div>
  );
}
