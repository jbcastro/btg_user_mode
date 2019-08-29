import React from "react";

const filterForm = props => {
  const wineFilter = this.props.wineFilter;
  return (
    <div>
      <label htmlFor="filter">Filter by Poet: </label>
      <input
        type="text"
        id="filter"
        value={wineFilter}
        onChange={this.handleChange}
      />
    </div>
  );
};
export default filterForm;
