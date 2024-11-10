import * as React from "react";

import { cn } from "@/lib/utils";

const Box = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          " md:px-[50px] sm:px-[20px] max-w-[1366px] m-auto  px-[100px] py-[10px]  font-open-sans",
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
