import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";

const WineTable = props => {
  const handleDelete = props.handleDelete;
  const handleSelect = props.handleSelect;
  const onSelect = props.onSelect;
  const onClick = props.onClick;
  const clickMe = props.clickMe;
  const showMyComponent = props.showMyComponent;
  const handleNextClick = props.handleNextClick;
  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";
  const description = "description";

  const mise = "mise";
  const color = "color";
  const status = "status";
  const vinyard = "vinyard";
  let funfact;
  const onClear = props.onClear;
  const showAddForm = props.showAddForm;

  const useStyles = makeStyles(theme => ({
    button: {
      color: "blue",
      fontSize: ".7em"
    },

    delete: {
      margin: theme.spacing(1)
    },
    input: {},
    root: {
      // maxWidth: "100%",
      // marginTop: theme.spacing(3),
      // fontSize: 8
    },

    table: {},
    TableRow: {},
    Paper: {},
    head: {},
    body: {},
    tableCell: {
      //
    },
    CellDown: {
      fontSize: ".6em"
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ButtonBase onClick={onClear}>Clear Filters</ButtonBase>
      <p></p>

      <ButtonBase onClick={showAddForm}>Show/hide Add Form</ButtonBase>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow className={classes.TableRow}>
            <TableCell className={classes.CellDown} align="center">
              Name
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Vinyard
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Grapes
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Individual Grapes
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Year
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Place
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Area
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Country
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Appellation
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Mise
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Description
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Price
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Mise
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Color
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Status
            </TableCell>
            <TableCell className={classes.CellDown} align="center">
              Fun Fact
            </TableCell>
          </TableRow>
        </TableHead>
        {/* start table TableBody
        g
        static getDerivedStateFromProps(nextProps, prevState) {
            g
            g
        } */}

        <TableBody className={classes.TableRow}>
          {props.glasses.map((glass, idx) => (
            <TableRow className={classes.TableRow} key={glass._id}>
              <TableCell className={classes.tableCell}>
                <h5>Name</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass._id}
                  onClick={event => handleSelect(event)}
                >
                  {glass.name}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Vinyard</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.vinyard}
                  value={vinyard}
                  onClick={event => onSelect(event)}
                >
                  {glass.vinyard}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Grapes</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  component="button"
                  id={glass.grapes}
                  value={grapes}
                  onClick={event => onSelect(event)}
                >
                  {glass.grapes}
                </ButtonBase>
              </TableCell>

              <TableCell className={classes.tableCell}>
                <h5>Indiv</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.grape1}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape1}
                </ButtonBase>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.grape2}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape2}
                </ButtonBase>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.grape3}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape3}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Year</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.year}
                  value={year}
                  onClick={event => onSelect(event)}
                >
                  {glass.year}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>place</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.place}
                  value={place}
                  onClick={event => onSelect(event)}
                >
                  {glass.place}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Area</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.area}
                  value={area}
                  onClick={event => onSelect(event)}
                >
                  {glass.area}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Country</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.country}
                  value={country}
                  onClick={event => onSelect(event)}
                >
                  {glass.country}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Appell</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.appellation}
                  value={appellation}
                  onClick={event => onSelect(event)}
                >
                  {glass.appellation}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Mise</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.mise}
                  value={mise}
                  onClick={event => onSelect(event)}
                >
                  {glass.mise}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Descrip</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.description1}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description1}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  className={classes.button}
                  id={glass.description2}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description2}
                </ButtonBase>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.description3}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description3}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  className={classes.button}
                  id={glass.description4}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description4}
                </ButtonBase>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.description5}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description5}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  className={classes.button}
                  id={glass.description6}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description6}
                </ButtonBase>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.description7}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description7}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  className={classes.button}
                  id={glass.description8}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description8}
                </ButtonBase>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.description9}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description9}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  className={classes.button}
                  id={glass.description10}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description10}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Price</h5>
                <p></p>

                {glass.price}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Mise</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.mise}
                  value={mise}
                  onClick={event => onSelect(event)}
                >
                  {glass.mise}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Color</h5>
                <p></p>
                <ButtonBase
                  id={glass.color}
                  value={color}
                  onClick={event => onSelect(event)}
                >
                  {glass.color}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h5>Status</h5>
                <p></p>
                <ButtonBase
                  className={classes.button}
                  id={glass.status}
                  value={status}
                  onClick={event => onSelect(event)}
                >
                  {glass.status}
                </ButtonBase>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <ButtonBase
                  className={classes.button}
                  onClick={event => onClick(event)}
                >
                  {showMyComponent
                    ? (funfact = glass.funfact + "  " + "CLICK HERE TO CLOSE")
                    : (funfact = "Click Me")}
                </ButtonBase>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        className={classes.delete}
        onClick={handleDelete}
      >
        delete
      </Button>
    </Paper>
  );
};

export default WineTable;
