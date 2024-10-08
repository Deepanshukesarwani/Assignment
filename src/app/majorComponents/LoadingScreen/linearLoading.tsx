"use client"
import  React from "react";
// import { Progress } from "@/components/ui/progress";

export function LinearLoader() {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) return 0;
//         return prev + 10;
//       });
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="relative w-full h-[3px] bg-gray-200 overflow-hidden">
      <div
        className="absolute h-[4px] bg-[#4caf50] w-1/3 animate-linear-loading"
      />
    </div>
  );
}
