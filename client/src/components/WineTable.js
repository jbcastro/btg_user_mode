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
import { maxWidth } from "@material-ui/system";

const WineTable = props => {
  const handleSelect = props.handleSelect;
  const onSelect = props.onSelect;
  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";
  const description = "description";

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
      minWidth: 650
    },
    tableRow: {
      maxWidth: "1%"
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Grapes</TableCell>
            <TableCell align="right">Individual Grapes</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Appellation</TableCell>
            <TableCell align="right">Description</TableCell>
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
          {props.glasses.map(glass => (
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
                {/* Needs to be changed to where it is clicked and then the fun fact appears */}
                <ButtonBase worm="click me">Click Me</ButtonBase>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default WineTable;
