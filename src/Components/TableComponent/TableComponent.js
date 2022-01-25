import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Table } from "./styles";

function TableComponent(props) {
  return (
    <Table>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={props.pageSize}
        rowsPerPageOptions={props.rowsPerPageOptions}
        checkboxSelection={props.checkboxSelection}
        autoHeight
      />
    </Table>
  );
}

export default TableComponent;
