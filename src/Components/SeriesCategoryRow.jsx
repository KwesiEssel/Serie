import React from 'react'; // React import is missing

const SeriesCategoryRow = ({ category }) => {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>

            <form>
                id="Category"
            </form>
        </tr>
    );
}

export default SeriesCategoryRow;
