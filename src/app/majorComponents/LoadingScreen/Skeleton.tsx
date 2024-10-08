import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import CenterImg from "/public/icons/centerloading.png"
export function SkeletonDemo() {
  return (
    <div className="w-[100vw]  flex flex-col p-6">
      <div className="flex items-center justify-evenly space-x-12 w-[100%] ">
        <div className="flex space-x-6">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>

        <div className=" space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[50px]" />
        </div>
      </div>
      <br />
      <div className="flex items-center justify-evenly space-x-12 w-[100%] ">
        <div className="flex space-x-6">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>

        <div className=" space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[50px]" />
        </div>
      </div>
    </div>
  );
}
