import { FiSearch } from "react-icons/fi";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export default function SearchInput({
  containerClassName = "",
  className = "",
  ...props
}: SearchInputProps) {
  return (
    <div
      className={`w-full lg:w-[225px] h-[40px] rounded-[40px] border border-search-border bg-search-bg flex items-center justify-between px-[16px] ${containerClassName}`}
    >
      <input
        type="text"
        placeholder="Search"
        className={`bg-transparent text-sm text-gray-700 focus:outline-none w-full font-medium placeholder-[#8C8C8C] ${className}`}
        {...props}
      />
      <button
        className="text-[#8C8C8C] hover:text-gray-600 transition-colors flex-shrink-0 ml-2"
        aria-label="Search"
      >
        <FiSearch size={18} strokeWidth={2} />
      </button>
    </div>
  );
}
