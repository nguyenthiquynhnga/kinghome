'use client'
import * as React from 'react';
import "./Search.scss"
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar() {
    return (
        <div className="searchbar">
            {/* <input type="text" className="searchbar--input" placeholder='Tìm kiếm'/>
            <div className="searchbar--button"><SearchIcon viewBox='0 0 20 20'/></div> */}
            <input className="search__input" type="text" placeholder="Tìm kiếm..." />
        </div>
    )
}