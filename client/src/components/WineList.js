import React from "react";
import "./styles/App.css";
import Button from "@material-ui/core/Button";

const WineList = props => {
  const handleSelect = props.handleSelect;

  const content = props.glasses.map(glass => (
    <div key={glass._id}>
      <table>
        <tr>
          <th>name</th>
          <th>wine grapes</th>
          <th>individual grape</th>

          <th>wine year</th>
          <th>wine place</th>
          <th>wine area</th>
          <th>wine country</th>
          <th>wine appellation</th>
          <th>wine description</th>

          <th>wine funfact</th>
        </tr>
        <tr>
          <button id={glass._id} onClick={event => handleSelect(event)}>
            {glass.name}
          </button>

          <td>
            <Button variant="contained" color="primary">
              {glass.grapes}
            </Button>
          </td>
          <td>
            <Button variant="contained" color="primary">
              {glass.grape1}
            </Button>{" "}
            <Button variant="contained" color="primary">
              {glass.grape2}
            </Button>
            <Button variant="contained" color="primary">
              {glass.grape3}
            </Button>
          </td>

          <td>
            <Button variant="contained" color="primary">
              {glass.year}
            </Button>
          </td>
          <td>
            <Button variant="contained" color="primary">
              {glass.place}
            </Button>
          </td>
          <td>
            <Button variant="contained" color="primary">
              {glass.area}
            </Button>
          </td>
          <td>
            <Button variant="contained" color="primary">
              {glass.country}
            </Button>
          </td>
          <td>
            <Button variant="contained" color="primary">
              {glass.appellation}
            </Button>
          </td>
          <td>
            <Button variant="contained" color="primary">
              {glass.description1}
            </Button>
            <Button variant="contained" color="primary">
              {glass.description2}
            </Button>
            <Button variant="contained" color="primary">
              {glass.description3}
            </Button>
            <Button variant="contained" color="primary">
              {glass.description4}
            </Button>
            <Button variant="contained" color="primary">
              {glass.description5}
            </Button>
            <Button variant="contained" color="primary">
              {glass.description6}
            </Button>
          </td>
          <td>
            <Button variant="contained" color="primary">
              {glass.funfact}
            </Button>
          </td>
        </tr>
        <tr>
          <td />
        </tr>
      </table>
    </div>
  ));

  return <ul>{content}</ul>;
};
export default WineList;
