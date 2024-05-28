import React from 'react';

interface PaginationProps {
    rowsPerPage: number;
    itemsLength: number;
    paginate: Function;
    currentPage: number;
    paginateFront: () => void;
    paginateBack: () => void;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
    rowsPerPage,
    itemsLength,
    paginate,
    currentPage,
    paginateFront,
    paginateBack,
    className,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(itemsLength / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div
            className={`${className} z-[1] sm:flex-1 sm:flex sm:items-center sm:justify-between py-2`}
        >
            <div className="pb-3 md:pb-0">
                <p className="text-sm text-gray-700">
                    Showing
                    <span className="font-medium">
                        {' '}
                        {currentPage * rowsPerPage - rowsPerPage + 1}{' '}
                    </span>
                    to
                    <span className="font-medium">
                        {' '}
                        {currentPage * rowsPerPage > itemsLength
                            ? itemsLength
                            : currentPage * rowsPerPage}{' '}
                    </span>
                    of
                    <span className="font-medium"> {itemsLength} </span>
                    results
                </p>
            </div>
            <nav
                className="block relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
            >
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    <li>
                        <button
                            onClick={() => {
                                if (currentPage > 1) paginateBack();
                            }}
                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                                currentPage == 1 ? 'disabled' : ''
                            }`}
                        >
                            <span>Previous</span>
                        </button>

                        {pageNumbers.map((number, i) => (
                            <button
                                key={i.toString()}
                                onClick={() => {
                                    paginate(number);
                                }}
                                className={
                                    currentPage === number
                                        ? 'bg-brand-navy-light border-brand-navy-light text-logo-blue hover:bg-brand-navy-light relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                                        : 'bg-white border-gray-300 text-gray-500 hover:bg-brand-navy-light relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                                }
                            >
                                {number}
                            </button>
                        ))}

                        <button
                            onClick={() => {
                                if (currentPage < pageNumbers.length)
                                    paginateFront();
                            }}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span>Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
