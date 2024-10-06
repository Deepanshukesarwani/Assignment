// import * as React from "react";
// import { cn } from "@/lib/utils";

// const Timeline = React.forwardRef<
// 	HTMLOListElement,
// 	React.HTMLAttributes<HTMLOListElement>
// >(({ className, ...props }, ref) => (
// 	<ol ref={ref} className={cn("flex flex-col", className)} {...props} />
// ));
// Timeline.displayName = "Timeline";

// // const TimelineItem = React.forwardRef<
// // 	HTMLLIElement,
// // 	React.LiHTMLAttributes<HTMLLIElement>
// // >(({ className, ...props }, ref) => (
// // 	<li
// // 		ref={ref}
// // 		className={cn("relative flex flex-col p-6 pt-0 [&>*]:mb-3", className)}
// // 		{...props}
// // 	/>
// // ));
// // TimelineItem.displayName = "TimelineItem";

// const TimelineItem = React.forwardRef<
//   HTMLLIElement,
//   React.LiHTMLAttributes<HTMLLIElement>
// >(({ className, ...props }, ref) => (
//   <li
//     ref={ref}
//     className={cn("relative flex items-start p-6 pt-0", className)}
//     {...props}
//   />
// ));
// TimelineItem.displayName = "TimelineItem";

// // const TimelineTime = React.forwardRef<
// // 	HTMLParagraphElement,
// // 	React.HTMLAttributes<HTMLParagraphElement>
// // >(({ className, ...props }, ref) => (
// // 	<p
// // 		ref={ref}
// // 		className={cn(
// // 			"absolute translate-x-36 md:-translate-x-24 text-sm font-semibold leading-none text-secondary-foreground",
// // 			className,
// // 		)}
// // 		{...props}
// // 	/>
// // ));
// // TimelineTime.displayName = "TimelineTime";

// const TimelineTime = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn(
//       "text-sm font-semibold leading-none text-secondary-foreground",
//       className,
//     )}
//     {...props}
//   />
// ));
// TimelineTime.displayName = "TimelineTime";

// const TimelineConnector = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
// 	<div
// 		ref={ref}
// 		className={cn(
// 			// "absolute top-[15px] left-[30px] h-[calc(100%-15px)] w-px bg-primary",
//             "absolute top-4 left-[30px] -translate-x-1/2 h-[calc(100%-15px)] w-px border-l-2 border-dotted border-gray-300",
// 			className,
// 		)}
// 		{...props}
// 	/>
// ));
// TimelineConnector.displayName = "TimelineConnector";

// const TimelineHeader = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
// 	<div
// 		ref={ref}
// 		className={cn("flex items-center gap-4", className)}
// 		{...props}
// 	/>
// ));
// TimelineHeader.displayName = "TimelineHeader";

// const TimelineTitle = React.forwardRef<
// 	HTMLHeadingElement,
// 	React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, children, ...props }, ref) => (
// 	<h3
// 		ref={ref}
// 		className={cn(
// 			"font-semibold leading-none tracking-tight text-secondary-foreground",
// 			className,
// 		)}
// 		{...props}>
// 		{children}
// 	</h3>
// ));
// TimelineTitle.displayName = "CardTitle";

// const TimelineIcon = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
// 	<div
// 		ref={ref}
// 		className={cn("flex flex-col h-3 w-3 border-2 border-black rounded-full", className)}
// 		{...props}
// 	/>
// ));
// TimelineIcon.displayName = "TimelineIcon";

// const TimelineDescription = React.forwardRef<
// 	HTMLParagraphElement,
// 	React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
// 	<p
// 		ref={ref}
// 		className={cn("text-sm text-muted-foreground max-w-sm", className)}
// 		{...props}
// 	/>
// ));
// TimelineDescription.displayName = "TimelineDescription";

// const TimelineContent = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
// 	<div
// 		ref={ref}
// 		className={cn("flex flex-col items-start p-6 pt-0", className)}
// 		{...props}
// 	/>
// ));
// TimelineContent.displayName = "TimelineContent";

// export {
// 	Timeline,
// 	TimelineItem,
// 	TimelineConnector,
// 	TimelineHeader,
// 	TimelineTitle,
// 	TimelineIcon,
// 	TimelineDescription,
// 	TimelineContent,
// 	TimelineTime,
// };

// import * as React from "react";
// import { cn } from "@/lib/utils";

// // Main Timeline component that acts as an ordered list
// const Timeline = React.forwardRef<
//   HTMLOListElement,
//   React.HTMLAttributes<HTMLOListElement>
// >(({ className, ...props }, ref) => (
//   <ol ref={ref} className={cn("flex flex-col", className)} {...props} />
// ));
// Timeline.displayName = "Timeline";

// // Timeline item containing each step in the timeline
// // Changed from "flex-col" to "items-start" for horizontal alignment of icon and time
// const TimelineItem = React.forwardRef<
//   HTMLLIElement,
//   React.LiHTMLAttributes<HTMLLIElement>
// >(({ className, ...props }, ref) => (
//   <li
//     ref={ref}
//     className={cn("relative flex items-start p-6 pt-0", className)} // Now aligns items horizontally
//     {...props}
//   />
// ));
// TimelineItem.displayName = "TimelineItem";

// // TimelineTime - Now positioned inline, next to the icon, removed "absolute" positioning
// const TimelineTime = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn(
//       "text-sm font-semibold leading-none text-secondary-foreground", // Removed absolute, inline now
//       className,
//     )}
//     {...props}
//   />
// ));
// TimelineTime.displayName = "TimelineTime";

// // Connector between timeline items, adjusted for dotted style
// const TimelineConnector = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "absolute top-4 left-[15px] -translate-x-1/2 h-[calc(100%-15px)] w-px border-l-2 border-dotted border-gray-300", // Adjusted to a dotted line
//       className,
//     )}
//     {...props}
//   />
// ));
// TimelineConnector.displayName = "TimelineConnector";

// // Header containing title and possible other elements
// const TimelineHeader = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("flex items-center gap-4", className)} {...props} />
// ));
// TimelineHeader.displayName = "TimelineHeader";

// // TimelineTitle component for the title text
// const TimelineTitle = React.forwardRef<
//   HTMLHeadingElement,
//   React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, children, ...props }, ref) => (
//   <h3
//     ref={ref}
//     className={cn(
//       "font-semibold leading-none tracking-tight text-secondary-foreground", // Style for title
//       className,
//     )}
//     {...props}>
//     {children}
//   </h3>
// ));
// TimelineTitle.displayName = "TimelineTitle";

// // TimelineIcon - Styled as a circle with borders, positioned to the left of the time
// const TimelineIcon = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("h-3 w-3 border-2 border-black rounded-full", className)} // Circle icon with border
//     {...props}
//   />
// ));
// TimelineIcon.displayName = "TimelineIcon";

// // Description for each timeline item
// const TimelineDescription = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn("text-sm text-muted-foreground max-w-sm", className)} // Style for description text
//     {...props}
//   />
// ));
// TimelineDescription.displayName = "TimelineDescription";

// // Main content area for timeline item details
// const TimelineContent = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("flex flex-col items-start p-6 pt-0", className)} {...props} />
// ));
// TimelineContent.displayName = "TimelineContent";

// export {
//   Timeline,
//   TimelineItem,
//   TimelineConnector,
//   TimelineHeader,
//   TimelineTitle,
//   TimelineIcon,
//   TimelineDescription,
//   TimelineContent,
//   TimelineTime,
// };



import * as React from "react";
import { cn } from "@/lib/utils";

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol ref={ref} className={cn("flex flex-col relative", className)} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("relative flex items-start mb-8", className)}
    {...props}
  />
));
TimelineItem.displayName = "TimelineItem";

// Adjusted TimelineIcon to match the design
const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-4 w-4 border-2 border-gray-400 rounded-full bg-white absolute top-0 left-0 -translate-x-2/3 -translate-y-1/2",
      className
    )}
    {...props}
  />
));
TimelineIcon.displayName = "TimelineIcon";

// TimelineConnector to add a dotted line between icons
const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute top-4 left-[7px] h-full w-px border-l-2 border-dotted border-gray-300",
      className
    )}
    {...props}
  />
));
TimelineConnector.displayName = "TimelineConnector";

// Adjusted TimelineTime to place it adjacent to the timeline icon
const TimelineTime = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "ml-8 text-sm font-semibold text-gray-500",
      className
    )}
    {...props}
  />
));
TimelineTime.displayName = "TimelineTime";

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("ml-8", className)} {...props} />
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  >
    {children}
  </h3>
));
TimelineTitle.displayName = "TimelineTitle";

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("ml-8 text-gray-700", className)} {...props} />
));
TimelineDescription.displayName = "TimelineDescription";

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("ml-8", className)} {...props} />
));
TimelineContent.displayName = "TimelineContent";

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
};
