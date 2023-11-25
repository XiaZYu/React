import React from 'react';

const SearchInput = ({
    searchValue,
    setSearchValue
}) => {
    return (
        <div className="p-0.5">
            <div className="w-full relative ml-4 pt-1">
                <svg className="w-6 h-6 absolute pl-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                    value={searchValue}
                    style={{width:350}}
                    className="border rounded-xl pl-8 bg-gray-200 outline-none hover:border-none h-6"
                    type="text" placeholder={"请输入关键字"}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                />
            </div>
        </div>
    );
};

export default SearchInput;