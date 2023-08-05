import SearchBar from "./SearchBar";
import {useState} from "react";
import SeriesTable from "./SeriesTable";

const FilterableTable = ({series}) => {
    const [filterText, setFilterText] = useState('');
    return (
        <div>
            <SearchBar  filterText={filterTexts}
                        onFilterTextChange={setFilterText}
                        />
            <SeriesTable series={series}
                          filterText={filterText}
                        />
        </div>
    );

}

export default FilterableTable