import * as React from "react";

import { cn } from "@/lib/utils";
//
const Box = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "   px-[100px] md:px-[50px] sm:px-[20px]   py-[10px]  font-open-sans",
          className
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
Box.displayName = "Box";

export { Box };
