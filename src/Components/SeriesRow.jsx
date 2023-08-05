import React from 'react'; // React import is missing

const SeriesRow = ({ serie }) => { // Pass 'serie' as a prop
    const name = serie.name; // Missing semi-colon
    const folge = serie.folge
    const staffel = serie.staffel
    return (
        <tr>
            <td>
        <span style={{ color: 'red' }}>
          {name} {/* Display the name */}
        </span>
            </td>
            <td>{serie.staffel}</td>
            <td>{serie.folge}</td>
        </tr>
    );
}

export default SeriesRow;
