import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { maxWidth, flexbox } from "@material-ui/system";
import { purple } from "@material-ui/core/colors";

const WineTable = props => {
  const handleSelect = props.handleSelect;
  const onSelect = props.onSelect;
  const onClick = props.onClick;
  const clickMe = props.clickMe;
  const showMyComponent = props.showMyComponent;
  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";
  const description = "description";
  let funfact;
  const onClear = props.onClear;

  const timeStamp1 = props.glasses;

  const timeStamp = timeStamp1.map(result => result.timestamp);
  console.log(timeStamp);

  function timeStampCheck(timeStamp) {
    if (timeStamp > Date) {
      console.log("yo");
    }
  }

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    },
    root: {
      width: "100%",
      marginTop: theme.spacing(3)
    },

    table: {
      // minWidth: 650
    },
    tableRow: {
      height: "1px",
      width: "1px"
    },
    Paper: {
      display: "flex"
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <ButtonBase onClick={event => onClear(event)}>
            Clear Filters
          </ButtonBase>
          <TableRow className={classes.tableRow}>
            <TableCell emphasis="bold">Name</TableCell>
            <TableCell align="center">Grapes</TableCell>
            <TableCell align="center">Individual Grapes</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Place</TableCell>
            <TableCell align="center">Area</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Appellation</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Fun Fact</TableCell>
          </TableRow>
        </TableHead>
        {/* start table TableBody
        g
        static getDerivedStateFromProps(nextProps, prevState) {
            g
            g
        } */}

        <TableBody className={classes.tableRow}>
          {props.glasses.map((glass, idx) => (
            <TableRow key={glass._id}>
              <TableCell component="th" scope="row">
                <ButtonBase
                  id={glass._id}
                  onClick={event => handleSelect(event)}
                >
                  {glass.name}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase
                  component="button"
                  id={glass.grapes}
                  value={grapes}
                  onClick={event => onSelect(event)}
                >
                  {glass.grapes}
                </ButtonBase>
              </TableCell>

              <TableCell>
                <ButtonBase
                  id={glass.grape1}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape1}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.grape2}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape2}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.grape3}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape3}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase
                  id={glass.year}
                  value={year}
                  onClick={event => onSelect(event)}
                >
                  {glass.year}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase
                  id={glass.place}
                  value={place}
                  onClick={event => onSelect(event)}
                >
                  {glass.place}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase
                  id={glass.area}
                  value={area}
                  onClick={event => onSelect(event)}
                >
                  {glass.area}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase
                  id={glass.country}
                  value={country}
                  onClick={event => onSelect(event)}
                >
                  {glass.country}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase
                  id={glass.appellation}
                  value={appellation}
                  onClick={event => onSelect(event)}
                >
                  {glass.appellation}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase
                  id={glass.description1}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description1}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description2}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description2}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description3}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description3}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description4}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description4}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description5}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description5}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description6}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description6}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase onClick={event => onClick(event)}>
                  {showMyComponent
                    ? (funfact = glass.funfact + "  " + "CLICK HERE TO CLOSE")
                    : (funfact = "Click Me")}
                </ButtonBase>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default WineTable;
