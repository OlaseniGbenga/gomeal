import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Define the types for the props (children can be any valid React node)
interface TabsProps {
  children: ReactNode;
  className?:string;
}

interface TabsListProps {
  children: ReactNode;
}

interface TabsTriggerProps {
  onClick: () => void;
  isActive: boolean;
  children: ReactNode;
}

interface TabsContentProps {
  isActive: boolean;
  children: ReactNode;
}

// Tabs 
const Tabs: React.FC<TabsProps> = ({ children,className }) => {
  return <div className={cn("bg-white rounded-md  ",className)}>{children}</div>;
};

//Tabslist
const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return (
    <div className="flex gap-2 border-solid border-b-[1px] p-4 sm:px-2">
      {children}
    </div>
  );
};

// TabsTrigger component
const TabsTrigger: React.FC<TabsTriggerProps> = ({
  onClick,
  isActive,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer inline-flex gap-2 items-center font-bold px-4 py-1 rounded ${
        isActive ? "bg-secondary-light text-secondary" : "bg-white text-ash"
      }`}
    >
      {children}
    </div>
  );
};

//TabContent
const TabsContent: React.FC<TabsContentProps> = ({ isActive, children }) => {
  if (!isActive) return null;
  return <div>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
