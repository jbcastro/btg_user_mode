import React, { useState } from "react";
import useStyles from "./UseStyles";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardMedia from "@material-ui/core/CardMedia";
import { string } from "prop-types";
import { PromiseProvider } from "mongoose";
import DynamicGrapes from "./DynamicGrapes";
import DynamicDescription from "./DynamicDescription";
import {
  Form,
  Text,
  TextArea,
  RadioGroup,
  Radio,
  Checkbox,
  Select,
  Option,
  Scope,
  useFormState,
  useArrayField,
  ArrayField
} from "informed";
import { Button, createMuiTheme, Hidden } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const EditForm = (
  data,
  onSelect,
  hideRemoved,
  handleSelect,
  editCardChange,
  editCard,
  curItem,
  curEditItem,
  unEditedItem,
  onChange,
  handleSubmit,
  handleUpdate,
  handleDelete,
  onCurItemClear,
  props,
  onBlur,
  classes
) => {
  const [expanded, setExpanded] = React.useState(false);
  const [deleteButtonEnable, setDeleteButton] = React.useState(true);
  const [editEnable, setEdit] = React.useState(false);
  // const [editEnable2, setEdit2] = React.useState(t);
  const [changeState, setStateTrue] = React.useState(false);
  const beTouched = () => {
    setStateTrue(true);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDelButton = () => {
    setDeleteButton(!deleteButtonEnable);
  };
  const handleEdit = () => {
    setEdit(!editEnable);
  };
  const handleSelect2 = data => {
    handleEdit();
    handleSelect(data);
  };
  const closeIt = () => {
    // glasses.map(item => {
    //   if (item._id === data.data._id) {
    //     let butt = item;
    //     console.log(butt);
    //     if (butt !== curEditItem) {
    //       console.log("butt no good");
    //     } else {
    //       console.log("butt good");
    //     }
    //   }
    // });
    let steve = unEditedItem;
    let marc = curEditItem;
    console.log(steve);
    console.log(marc);

    // if (data !== curEditItem) {
    //   console.log("falseeeee");
    // } else {
    //   console.log("truuuuuuu");
    // }

    // handleEdit();
    // onCurItemClear();
  };

  const validate = value => {
    if (value !== curEditItem.name) {
      console.log("bad");
    } else {
      console.log("good");
    }
  };
  return (
    <Form
      id="form-api-form"
      onSubmit={handleUpdate}
      initialValues={{
        grape: data.grape,
        description: data.description
      }}
    >
      {/* <code>{JSON.stringify(formState.touched)}</code> */}
      <button type="submit">Save</button>
      <button type="button" onClick={closeIt}>
        Close
      </button>
      <label>
        <br></br>
        <font size="1">Name:</font>
        <Text
          className={classes.text}
          field="name"
          initialValue={data.name}
          onBlur={onBlur}
          validate={validate}
        ></Text>
      </label>
      <br></br>
      <label>
        <font size="1">Vinyard:</font>
        <Text
          className={classes.text}
          field="vinyard"
          initialValue={data.vinyard}
          onBlur={onBlur}
        ></Text>
      </label>
      <label>
        <font size="1">id:</font>
        <Text
          className={classes.text}
          field="_id"
          disabled={true}
          initialValue={data._id}
        ></Text>
      </label>
      <br></br>
      <label>
        <font size="1">Grapes:</font>
        <Text
          className={classes.text}
          field="grapes"
          initialValue={data.grapes}
          onBlur={onBlur}
        ></Text>
      </label>
      <br></br>
      {/* start of grapes */}
      <DynamicGrapes onBlur={onBlur} data={data} />
      {/* {DynamicDescription} */}
      <DynamicDescription onBlur={onBlur} data={data.description} />
      {/* end of grapes */}
      <label>
        <font size="1">Year:</font>
        <Text
          className={classes.text}
          field="year"
          type="number"
          initialValue={data.year}
          onBlur={onBlur}
        ></Text>
      </label>
      <br></br>
      <label>
        <font size="1">Place:</font>
        <Text
          className={classes.text}
          field="place"
          initialValue={data.place}
          onBlur={onBlur}
        ></Text>
      </label>
      <br></br>
      <label>
        <font size="1">Area:</font>
        <Text
          className={classes.text}
          field="area"
          initialValue={data.area}
          onBlur={onBlur}
        ></Text>
      </label>
      <br></br>
      <label>
        <font size="1">Country:</font>
        <Text
          className={classes.text}
          field="country"
          initialValue={data.country}
          onBlur={onBlur}
        ></Text>
      </label>
      <br></br>
      <label>
        <font size="1">Appellation:</font>
        <Text
          className={classes.text}
          field="appellation"
          initialValue={data.appellation}
          onBlur={onBlur}
        ></Text>
      </label>
      <br></br>
      <label>
        <font size="1">Price:</font>
        <Text
          className={classes.text}
          field="price"
          type="number"
          initialValue={data.price}
          onBlur={onBlur}
        ></Text>
      </label>
      <br></br>
      <label>
        Status:
        <Select field="status" initialValue={data.status} onBlur={onBlur}>
          <Option value="">{data.status}</Option>
          <Option value="none">None</Option>
          <Option value="added">Added</Option>
          <Option value="removed">Removed</Option>
          <Option value="hidden">Hidden</Option>
        </Select>
      </label>
      <br></br>
      <label>
        Mise:
        <Select field="mise" initialValue={data.mise} onBlur={onBlur}>
          <Option value="">{data.mise}</Option>
          <Option value="ap">AP</Option>
          <Option value="burg">BURG</Option>
          <Option value="dbx">BDX</Option>
          <Option value="flute">Flute</Option>
          <Option value="dw ">DW</Option>
          <Option value="krug">Krug Flute</Option>
        </Select>
      </label>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <br></br>
          <label>
            <font size="1">Fun Fact:</font>
            <TextArea
              className={classes.text}
              field="funfact"
              initialValue={data.funfact}
              onBlur={onBlur}
            ></TextArea>
          </label>
        </CardContent>
      </Collapse>
    </Form>
  );
};
export default EditForm;
