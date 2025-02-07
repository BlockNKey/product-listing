import { ProductFilter } from '@/types';
import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";

interface ProductFiltersProps {
  filters: ProductFilter;
  onFilterChange: (filters: Partial<ProductFilter>) => void;
  productTypes: string[];
}

const ProductFilters = ({ filters, onFilterChange, productTypes }: ProductFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current && isOpen) {
        setHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);
  const inputStyles = "w-full px-4 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-dark-accent border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 ease-in-out hover:border-gray-400 dark:hover:border-gray-500 border-2";

  return (
    <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-md p-6 mb-6 animate-fade-in">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full flex justify-between items-center p-3"
      >
        <span className="font-medium text-gray-700 dark:text-gray-200">Filters</span>
        <GoChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ height: typeof height === 'undefined' ? 'auto' : height }}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          typeof height === 'undefined' ? '' : 'md:!h-auto'
        }`}
      >
        <div className="space-y-6 pt-4">
          <div className="transition-opacity duration-200 ease-in-out">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Search Products
            </label>
            <input
              type="text"
              id="search"
              value={filters.search}
              onChange={(e) => onFilterChange({ search: e.target.value })}
              className={inputStyles}
              placeholder="Enter product name..."
            />
          </div>

          <div className="transition-opacity duration-200 ease-in-out">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Price Range
            </label>
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="number"
                  value={filters.minPrice || ''}
                  onChange={(e) => onFilterChange({ minPrice: Number(e.target.value) })}
                  className={inputStyles}
                  placeholder="Min"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  value={filters.maxPrice === Infinity ? '' : filters.maxPrice}
                  onChange={(e) => onFilterChange({ maxPrice: e.target.value ? Number(e.target.value) : Infinity })}
                  className={inputStyles}
                  placeholder="Max"
                />
              </div>
            </div>
          </div>

          <div className="transition-opacity duration-200 ease-in-out">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Product Type
            </label>
            <select
              id="type"
              value={filters.type}
              onChange={(e) => onFilterChange({ type: e.target.value })}
              className={`${inputStyles} cursor-pointer appearance-none bg-no-repeat bg-right pr-10`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundSize: '1.5rem'
              }}
            >
              <option value="">All Types</option>
              {productTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="transition-opacity duration-200 ease-in-out">
            <label htmlFor="minCount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Minimum Stock
            </label>
            <input
              type="number"
              id="minCount"
              value={filters.minCount}
              onChange={(e) => onFilterChange({ minCount: Number(e.target.value) })}
              className={inputStyles}
              min="0"
              placeholder="Enter minimum stock..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters