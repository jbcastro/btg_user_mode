import React from "react";
import "./styles/App.css";

const WineList = props => {
  const handleSelect = props.handleSelect;
  const onSelect = props.onSelect;
  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";

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
            <button
              id={glass.grapes}
              value={grapes}
              onClick={event => onSelect(event)}
            >
              {glass.grapes}
            </button>
          </td>
          <td>
            <button
              id={glass.grape1}
              value={grape}
              onClick={event => onSelect(event)}
            >
              {glass.grape1}
            </button>
            <p>
              <button
                id={glass.grape2}
                value={grape}
                onClick={event => onSelect(event)}
              >
                {glass.grape2}
              </button>
            </p>
            <p>
              <button
                id={glass.grape3}
                value={grape}
                onClick={event => onSelect(event)}
              >
                {glass.grape3}
              </button>
            </p>
          </td>

          <td>
            <button
              id={glass.year}
              value={year}
              onClick={event => onSelect(event)}
            >
              {glass.year}
            </button>
          </td>
          <td>
            <button
              id={glass.place}
              value={place}
              onClick={event => onSelect(event)}
            >
              {glass.place}
            </button>
          </td>
          <td>
            <button
              id={glass.area}
              value={area}
              onClick={event => onSelect(event)}
            >
              {glass.area}
            </button>
          </td>
          <td>
            <button
              id={glass.country}
              value={country}
              onClick={event => onSelect(event)}
            >
              {glass.country}
            </button>
          </td>
          <td>
            <button
              id={glass.appellation}
              value={appellation}
              onClick={event => onSelect(event)}
            >
              {glass.appellation}
            </button>
          </td>
          <td>
            <button>{glass.description1}</button>
            <button>{glass.description2}</button>
            <button>{glass.description3}</button>
            <button>{glass.description4}</button>
            <button>{glass.description5}</button>
            <button>{glass.description6}</button>
          </td>
          <td>
            <button>{glass.funfact}</button>
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
