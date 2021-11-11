import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchText,
  updateSearchText,
} from './searchFieldSlice';

export default function SearchField() {
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText);

  return (
    <div id="search" className="flex flex-1 mx-4 max-w-sm relative">
      <input
        type="search"
        placeholder="Search Reddit"
        value={searchText}
        onChange={(e) => dispatch(updateSearchText(e.target.value))}
        className="flex-1 border-solid border-2 border-gray-300 rounded-md pl-10 pr-4 py-2"
      ></input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute left-4 top-3  text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
