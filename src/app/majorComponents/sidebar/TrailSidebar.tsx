"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
} from "@/components/ui/timeline/timeLine";
import { TimelineElement } from "@/app/data";
import { useFlightStore } from "@/store/userStore";

interface TimelineLayoutProps {
  items: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  return (
    // <Timeline>
    //   <TimelineItem className="bg-orange-400">
    //   <TimelineIcon />
    //     <TimelineConnector className="bg-green-300" />
    //     <TimelineHeader className="bg-yellow-200">
    //       <TimelineTime className=" flex justify-evenly ">
    //         <span>Mon</span>
    //         <span>28</span>
    //         <span>Sept</span>
    //         <span>2:30</span>
    //       </TimelineTime>
    //       <TimelineTitle>
    //         <span>DEL . Indira Gandhi International Airport</span>
    //       </TimelineTitle>
    //     </TimelineHeader>
    //     <TimelineContent>
    //       <TimelineDescription>{items[0].description}</TimelineDescription>
    //     </TimelineContent>
    //     <TimelineIcon />
    //   </TimelineItem>
    // </Timeline>
    <TimelineItem className="bg-orange-400">
		<div className="bg-slate-500 h-[100%] w-[1rem]">
		<TimelineIcon className="absolute top-1 left-2" />
        <TimelineConnector className="bg-green-300" />
        <TimelineIcon className="absolute top-[10rem] left-2"/>
		</div>

      <TimelineHeader className="bg-yellow-200">
        <TimelineTime className="absolute left-[8rem] top-1 bg-red-300">
			<div className="w-full h-full bg-green-200 flex justify-evenly">
          <span>Mon</span>
          <span>28</span>
          <span>Sept</span>
          <span>2:30</span>
			</div>
        </TimelineTime>
        <TimelineTitle className="">
          <span>DEL . Indira Gandhi International Airport</span>
        </TimelineTitle>
      </TimelineHeader>
      <TimelineContent>
        <TimelineDescription>{items[0].description}</TimelineDescription>
      </TimelineContent>
    </TimelineItem>
  );
};
