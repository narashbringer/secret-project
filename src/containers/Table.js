import React, { Component } from "react";
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Dash extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selected: 1,
    patients:[]
  }
}
  render() {
    return (
      <div className="Home">
      <BootstrapTable data={products} pagination search
  searchPlaceholder='input something...' exportCSV striped={true} hover={true}>
          <TableHeaderColumn dataField="name" isKey={true} dataAlign="center">Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="date started" dataAlign="center" >DATE STARTED</TableHeaderColumn>
          <TableHeaderColumn dataField="number_of_days" dataFormat={priceFormatter}>Days in CASA</TableHeaderColumn>
          <TableHeaderColumn dataField="today" dataFormat={priceFormatter}>Journal today</TableHeaderColumn>
          <TableHeaderColumn dataField="tommorow" dataFormat={priceFormatter}>Journal Date</TableHeaderColumn>
          <TableHeaderColumn dataField="back2days" dataFormat={priceFormatter}>Journal Date</TableHeaderColumn>
          <TableHeaderColumn dataField="back3days" dataFormat={priceFormatter}>Journal Date</TableHeaderColumn>
          <TableHeaderColumn dataField="back4days" dataFormat={priceFormatter}>Journal Date</TableHeaderColumn>
          <TableHeaderColumn dataField="back5days" dataFormat={priceFormatter}>Journal Date</TableHeaderColumn>
          <TableHeaderColumn dataField="back6days" dataFormat={priceFormatter}>Journal Date</TableHeaderColumn>
          <TableHeaderColumn dataField="Message" dataFormat={priceFormatter}>Message Member</TableHeaderColumn>
      </BootstrapTable>,
      </div>
    );
  }
}
var products = [{

  }];
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}
