import { Input } from "../ui/input";

interface SearchProps {
  className?: string;
  placeholder?:string;
  searchTerm: string;
  icon: React.ReactElement;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({
  searchTerm,
  placeholder,
  handleSearchChange,
  icon,
  className,
}: SearchProps) {
  return (
    <>
      <div className="relative ">
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={placeholder}
          className={`pl-10 ${className}`}
        />

        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          {searchTerm.length === 0 && icon}
        </div>
      </div>
    </>
  );
}

export default Search;
