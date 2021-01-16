import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import ButtonBase from "@material-ui/core/ButtonBase";

const AddEditForm = props => {
  const handleSubmit = props.handleSubmit;

  const handleDelete = props.handleDelete;

  const onChange = props.onChange;

  const onCurItemClear = props.onCurItemClear;
  const handleNextClick = props.handleNextClick;
  const handlePrevClick = props.handlePrevClick;

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

    input: {
      display: "none"
    },
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          multiline
          multiline
          label="Name"
          className={classes.textField}
          type="text"
          name="name"
          placeholder="name"
          onBlur={props.onChange}
          margin="normal"
          defaultValue={props.curItem.name}
        />
        <TextField
          multiline
          fullWidth
          multiline
          label="Vinyard"
          className={classes.textField}
          type="text"
          name="vinyard"
          placeholder="vinyard"
          onBlur={props.onChange}
          margin="normal"
          defaultValue={props.curItem.vinyard}
        />
        <TextField
          multiline
          label="Grapes"
          type="text"
          name="grapes"
          placeholder="Grapes"
          onBlur={props.onChange}
          defaultValue={props.curItem.grapes}
          margin="normal"
        />
        <TextField
          multiline
          label="Grape 1"
          type="text"
          name="grape1"
          placeholder="Grape 1"
          onBlur={props.onChange}
          defaultValue={props.curItem.grape1}
          margin="normal"
        />
        <TextField
          multiline
          label="Grape 2"
          type="text"
          name="grape2"
          placeholder="Grape 2"
          onBlur={props.onChange}
          defaultValue={props.curItem.grape2}
          margin="normal"
        />
        <TextField
          multiline
          label="Grape 3"
          type="text"
          name="grape3"
          placeholder="Grape 3"
          onBlur={props.onChange}
          defaultValue={props.curItem.grape3}
          margin="normal"
        />
        <TextField
          multiline
          label="Grape 4"
          type="text"
          name="grape4"
          placeholder="Grape 4"
          onBlur={props.onChange}
          defaultValue={props.curItem.grape4}
          margin="normal"
        />
        <TextField
          multiline
          label="Year"
          type="text"
          name="year"
          placeholder="Year"
          onBlur={props.onChange}
          defaultValue={props.curItem.year}
          margin="normal"
        />
        <TextField
          multiline
          label="Place"
          type="text"
          name="place"
          placeholder="Place"
          onBlur={props.onChange}
          defaultValue={props.curItem.place}
          margin="normal"
        />
        <TextField
          multiline
          label="Area"
          type="text"
          name="area"
          placeholder="Area"
          onBlur={props.onChange}
          defaultValue={props.curItem.area}
          margin="normal"
        />
        <TextField
          multiline
          label="Country"
          type="text"
          name="country"
          placeholder="Country"
          onBlur={props.onChange}
          defaultValue={props.curItem.country}
          margin="normal"
        />
        <TextField
          multiline
          label="Appellation"
          type="text"
          name="appellation"
          placeholder="Appellation"
          onBlur={props.onChange}
          defaultValue={props.curItem.appellation}
          margin="normal"
        />
        <TextField
          multiline
          label="Description1"
          type="text"
          name="description1"
          placeholder="Description 1"
          onBlur={props.onChange}
          defaultValue={props.curItem.description1}
          margin="normal"
        />
        <TextField
          multiline
          label="Description2"
          type="text"
          name="description2"
          placeholder="Description 2"
          onBlur={props.onChange}
          defaultValue={props.curItem.description2}
          margin="normal"
        />
        <TextField
          multiline
          label="Description3"
          type="text"
          name="description3"
          placeholder="Description 3"
          onBlur={props.onChange}
          defaultValue={props.curItem.description3}
          margin="normal"
        />
        <TextField
          multiline
          label="Description4"
          type="text"
          name="description4"
          placeholder="Description 4"
          onBlur={props.onChange}
          defaultValue={props.curItem.description4}
          margin="normal"
        />
        <TextField
          multiline
          label="Description5"
          type="text"
          name="description5"
          placeholder="Description 5"
          onBlur={props.onChange}
          defaultValue={props.curItem.description5}
          margin="normal"
        />
        <TextField
          multiline
          label="Description6"
          type="text"
          name="description6"
          placeholder="Description 6"
          onBlur={props.onChange}
          defaultValue={props.curItem.description6}
          margin="normal"
        />
        <TextField
          multiline
          label="Description7"
          type="text"
          name="description7"
          placeholder="Description 7"
          onBlur={props.onChange}
          defaultValue={props.curItem.description7}
          margin="normal"
        />
        <TextField
          multiline
          label="Description8"
          type="text"
          name="description8"
          placeholder="Description 8"
          onBlur={props.onChange}
          defaultValue={props.curItem.description8}
          margin="normal"
        />
        <TextField
          multiline
          label="Description9"
          type="text"
          name="description9"
          placeholder="Description 9"
          onBlur={props.onChange}
          defaultValue={props.curItem.description9}
          margin="normal"
        />
        <TextField
          multiline
          label="Description10"
          type="text"
          name="description10"
          placeholder="Description 10"
          onBlur={props.onChange}
          defaultValue={props.curItem.description10}
          margin="normal"
        />
        <TextField
          multiline
          label="Description11"
          type="text"
          name="description11"
          placeholder="Description 11"
          onBlur={props.onChange}
          defaultValue={props.curItem.description11}
          margin="normal"
        />
        <TextField
          multiline
          label="Description12"
          type="text"
          name="description12"
          placeholder="Description 12"
          onBlur={props.onChange}
          defaultValue={props.curItem.description12}
          margin="normal"
        />
        <TextField
          multiline
          label="Description13"
          type="text"
          name="description13"
          placeholder="Description 13"
          onBlur={props.onChange}
          defaultValue={props.curItem.description13}
          margin="normal"
        />
        <TextField
          multiline
          label="Description14"
          type="text"
          name="description14"
          placeholder="Description 14"
          onBlur={props.onChange}
          defaultValue={props.curItem.description14}
          margin="normal"
        />
        <TextField
          multiline
          id="standard-number"
          label="Price"
          type="number"
          name="price"
          placeholder="Price"
          onBlur={props.onChange}
          defaultValue={props.curItem.price}
          margin="normal"
        />
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="mise-native-label-placeholder">
            Mise
          </InputLabel>
          <Select
            value={props.curItem.mise || ""}
            onChange={onChange}
            inputProps={{
              name: "mise",
              id: "mise-simple"
            }}
          >
            <MenuItem value={"AP"}>AP</MenuItem>
            <MenuItem value={"Krug Flute"}>Krug Flute</MenuItem>
            <MenuItem value={"BURG"}>BURG</MenuItem>
            <MenuItem value={"BDX"}>BDX</MenuItem>
            <MenuItem value={"Flute"}>Flute</MenuItem>
            <MenuItem value={"DW"}>DW</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="coravin-native-label-placeholder">
            Corvin
          </InputLabel>
          <Select
            value={props.curItem.coravin || ""}
            onChange={onChange}
            inputProps={{
              name: "coravin",
              id: "coravin-simple"
            }}
          >
            <MenuItem value={true}>TRUE</MenuItem>
            <MenuItem value={false}>FALSE</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="color-native-label-placeholder">
            Color
          </InputLabel>{" "}
          <Select
            value={props.curItem.color || ""}
            onChange={onChange}
            inputProps={{
              name: "color",
              id: "color-simple"
            }}
          >
            <MenuItem value={"red"}>red</MenuItem>
            <MenuItem value={"white"}>white</MenuItem>
            <MenuItem value={"dessert"}>dessert</MenuItem>

            <MenuItem value={"sparkling"}>sparkling</MenuItem>
          </Select>
        </FormControl>
        {/* form for added,deleted,hidden */}
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="status-native-label-placeholder">
            Status
          </InputLabel>
          <Select
            value={props.curItem.status || ""}
            onChange={onChange}
            inputProps={{
              name: "status",
              id: "status-simple"
            }}
          >
            <MenuItem value={"added"}>added</MenuItem>
            <MenuItem value={"removed"}>removed</MenuItem>
            <MenuItem value={"hidden"}>hidden</MenuItem>
            <MenuItem value={"none"}>none</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Picture"
          type="text"
          name="picture"
          placeholder="Picture"
          onBlur={props.onChange}
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
          onBlur={props.onChange}
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
        add/update
      </Button>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => onCurItemClear()}
      >
        clear
      </Button>
      <p></p>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handlePrevClick}
      >
        prev
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleNextClick}
      >
        next
      </Button>
    </div>
  );
};

export default AddEditForm;
