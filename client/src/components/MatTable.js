import React from "react";
import MaterialTable from "material-table";
import Glasses from "../Glasses";

//still a work in progress

const MatTable = props => {
  const glasses = props.glasses;
  console.log(glasses);
  const glassMap = glasses.map(result => result.name);
  console.log(glassMap);

  const grapet = Glasses.grapes;
  console.log(grapet);

  return (
    <MaterialTable
      title="Wines"
      columns={[
        { title: "Name", field: "name" },
        { title: "Grapes", field: "grapes" }
      ]}
      // data={glasses.map(result => result.name)}
      data={[{ name: "Steve", grapes: "Jim" }]}
    />
  );
};
export default MatTable;
