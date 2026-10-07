import React from "react";
import { Search } from 'lucide-react';
export default function Toolbar({ search, onSearch, placeholder = 'Search records...' , children }) {
 return <div className="toolbar"><label className="searchbox"><Search size={17}/><input value={search} onChange={e=>onSearch(e.target.value)} placeholder={placeholder}/></label>{children}</div>;
}
