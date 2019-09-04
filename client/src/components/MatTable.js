import React from "react";
import MaterialTable from "material-table";

//still a work in progress

const MatTable = props => {
  const glasses = props.glasses;
  console.log(glasses);
  const glassMap = glasses.map(result => result.name);
  console.log(glassMap);

  const grapet = glasses.grapes;
  console.log(grapet);

  return (
    <MaterialTable
      title="Wines"
      columns={[
        { title: "Name", field: "name" },
        { title: "Grapes", field: "grapes" }
      ]}
      // data={glasses.map(result => result.name)}
      data={[
        { name: "name", grapes: "grapes" },
        { name: "name2", grapes: "grapes2" }
      ]}
    />
  );
};
export default MatTable;
