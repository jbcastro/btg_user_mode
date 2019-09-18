import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddEditForm = props => {
  const handleSubmit = props.handleSubmit;

  const handleOnClick = props.handleOnClick;

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    },
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  }));

  const currencies = [
    {
      value: "USD",
      label: "$"
    }
  ];

  const classes = useStyles();

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          label="Name"
          className={classes.textField}
          type="text"
          name="name"
          placeholder="name"
          onChange={props.onChange}
          value={props.curItem.name || ""}
          margin="normal"
        />
        <TextField
          required
          label="Grapes"
          type="text"
          name="grapes"
          placeholder="Grapes"
          onChange={props.onChange}
          value={props.curItem.grapes || ""}
          margin="normal"
        />
        <TextField
          required
          label="Grape 1"
          type="text"
          name="grape1"
          placeholder="Grape 1"
          onChange={props.onChange}
          value={props.curItem.grape1 || ""}
          margin="normal"
        />
        <TextField
          label="Grape 2"
          type="text"
          name="grape2"
          placeholder="Grape 2"
          onChange={props.onChange}
          value={props.curItem.grape2 || ""}
          margin="normal"
        />
        <TextField
          label="Grape 3"
          type="text"
          name="grape3"
          placeholder="Grape 3"
          onChange={props.onChange}
          value={props.curItem.grape3 || ""}
          margin="normal"
        />
        <TextField
          required
          label="Year"
          type="text"
          name="year"
          placeholder="Year"
          onChange={props.onChange}
          value={props.curItem.year || ""}
          margin="normal"
        />
        <TextField
          required
          label="Place"
          type="text"
          name="place"
          placeholder="Place"
          onChange={props.onChange}
          value={props.curItem.place || ""}
          margin="normal"
        />
        <TextField
          label="Area"
          type="text"
          name="area"
          placeholder="Area"
          onChange={props.onChange}
          value={props.curItem.area || ""}
          margin="normal"
        />
        <TextField
          required
          label="Country"
          type="text"
          name="country"
          placeholder="Country"
          onChange={props.onChange}
          value={props.curItem.country || ""}
          margin="normal"
        />
        <TextField
          required
          label="Appellation"
          type="text"
          name="appellation"
          placeholder="Appellation"
          onChange={props.onChange}
          value={props.curItem.appellation || ""}
          margin="normal"
        />
        <TextField
          required
          label="Description1"
          type="text"
          name="description1"
          placeholder="Description1"
          onChange={props.onChange}
          value={props.curItem.description1 || ""}
          margin="normal"
        />
        <TextField
          label="Description2"
          type="text"
          name="description2"
          placeholder="Description2"
          onChange={props.onChange}
          value={props.curItem.description2 || ""}
          margin="normal"
        />
        <TextField
          label="Description3"
          type="text"
          name="description3"
          placeholder="Description3"
          onChange={props.onChange}
          value={props.curItem.description3 || ""}
          margin="normal"
        />
        <TextField
          label="Description4"
          type="text"
          name="description4"
          placeholder="Description4"
          onChange={props.onChange}
          value={props.curItem.description4 || ""}
          margin="normal"
        />
        <TextField
          label="Description5"
          type="text"
          name="description5"
          placeholder="Description5"
          onChange={props.onChange}
          value={props.curItem.description5 || ""}
          margin="normal"
        />
        <TextField
          label="Description6"
          type="text"
          name="description6"
          placeholder="Description6"
          onChange={props.onChange}
          value={props.curItem.description6 || ""}
          margin="normal"
        />
        <TextField
          label="Price"
          type="text"
          name="price"
          placeholder="Price"
          onChange={props.onChange}
          value={props.curItem.price || ""}
          margin="normal"
        />
        <TextField
          label="Mise"
          type="text"
          name="mise"
          placeholder="Mise"
          onChange={props.onChange}
          value={props.curItem.mise || ""}
          margin="normal"
        />
        <TextField
          fullWidth
          multiline
          label="Funfact"
          type="text"
          name="funfact"
          style={{ margin: 8 }}
          placeholder="Fun Fact"
          onChange={props.onChange}
          value={props.curItem.funfact || ""}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => handleSubmit()}
      >
        add
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => handleOnClick()}
      >
        delete brah?
      </Button>
    </div>
  );
};

export default AddEditForm;
