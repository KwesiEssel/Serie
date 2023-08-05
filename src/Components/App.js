// App.js
import React from 'react';
import SeriesTable from './SeriesTable';
import SearchBar from "./SearchBar";
import SeriesCategoryRow from "./SeriesCategoryRow";
import SeriesRow from "./SeriesRow";
import AboutPage from "./AboutPage";
import FilterableTable from "./FilterableSeriesTable"

const App = () => {

    const seriesData = [
        { name: 'Power', category: 'Category A', staffel: 'Staffel 6', folge: 'Folge 1' },
        // Add more series data here
        { name: 'Suits', category: 'Category B', staffel: 'Staffel 2', folge: 'Folge 2'},
        { name: 'Modern Family', category: 'Category B', staffel: 'Staffel 10', folge: 'Folge 10' }
    ];

    return (
        <div>
            <h1>Serie Sphere</h1>
            <AboutPage/>
            <FilterableTable series={seriesData}/>
        </div>
    );
}

export default App;
