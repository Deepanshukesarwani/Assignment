"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Navbar } from "../navbar/Navbar";
import Index from "../search.components";


const TopSheet: React.FC = () => {
    return (
      <div className="w-[45vw]  ">
      <Sheet key={"top"}>
        <SheetTrigger asChild className="">
            <div className="w-[100%]  ">
            <Navbar />
            </div>
        </SheetTrigger>
        <SheetContent side={"top"} className="h-[35vh]">
          <SheetHeader>
            <div className="p-[1rem] flex justify-center mt-2">
              <Index/>
            </div>
          </SheetHeader>
          <SheetFooter>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      </div>

    );
  };
  
  export default TopSheet;