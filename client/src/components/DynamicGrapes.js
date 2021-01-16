import React from "react";
import { Form, Text, ArrayField } from "informed";
const DynamicGrapes = ({ onBlur }) => {
  return (
    <ArrayField field="grape">
      {({ add, fields }) => (
        <>
          {fields.map(({ field, key, remove, value }, i) => (
            <label htmlFor={i} key={key}>
              <br></br>
              grape {i + 1}:
              <Text field={field} id={`grape${i}`} onBlur={onBlur} />
              <button type="button" onClick={remove}>
                Remove Grape
              </button>
              <button onClick={add} type="button">
                Add grape
              </button>
              <br></br>
            </label>
          ))}
        </>
      )}
    </ArrayField>
  );
};
export default DynamicGrapes;
