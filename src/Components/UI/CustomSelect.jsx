import '../../Style/App.css'
import { useState, useRef, useEffect } from "react";

function CustomSelect({ options = [],labelSelect='', onChange }){
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
      setSelected(option);
      setIsOpen(false);
      if (onChange) onChange(option.value);
    };

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return(
        <div className="relative w-full max-w-md" ref={dropdownRef}>
            <button
              type="button"
              onClick={toggleDropdown}
              className="relative w-full py-3 px-4 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-sm text-sm text-gray-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {selected ? selected.label : labelSelect}
              {/* Arrow */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg text-sm max-h-60 overflow-y-auto p-1 space-y-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                {options.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className="flex justify-between items-center px-4 py-2 rounded-md text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    <span>{option.label}</span>
                    {selected?.value === option.value && (
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            )}
        </div>
    );
}
export default CustomSelect;