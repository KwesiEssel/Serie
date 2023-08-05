// SeriesTable.js
import React from 'react';
import SeriesRow from './SeriesRow';
import SeriesCategoryRow from "./SeriesCategoryRow";

const SeriesTable = ({ series, filterText}) => {
    const rows = [];
    let lastCategory = null;

    if (!series) {
        return <div>No data available</div>; // Handle the case where 'series' is undefined or empty
    }

    series.forEach((serie) => {
        if (
            serie.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
        ) {
            return;
        }
        if (serie.category !== lastCategory) {
            rows.push(
                <SeriesCategoryRow
                    category={serie.category}
                    key={serie.category}
                />
            );
        }
        rows.push(
            <SeriesRow
                serie={serie}
                key={serie.name}
            />
        );
        lastCategory = serie.category;
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Staffel</th>
                <th>Folge</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default SeriesTable;
