import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import TableComponent from "../../Components/TableComponent/TableComponent";
import { Container, Table } from "./styles";

const ListOs = () => {
  const columns = [
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 300,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    { field: "lastName", headerName: "Last name", width: 200 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 120,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "1111", firstName: "Harvey", age: 65 },
    { id: 11, lastName: "22222", firstName: "Jon", age: 35 },
    { id: 12, lastName: "333", firstName: "Cersei", age: 42 },
    { id: 13, lastName: "444", firstName: "Jaime", age: 45 },
    { id: 14, lastName: "555", firstName: "Arya", age: 16 },
    { id: 15, lastName: "1293y912", firstName: "Daenerys", age: null },
    { id: 16, lastName: "777", firstName: null, age: 150 },
    { id: 17, lastName: "888", firstName: "Ferrara", age: 44 },
    { id: 18, lastName: "9909", firstName: "Rossini", age: 36 },
    { id: 19, lastName: "1323", firstName: "Harvey", age: 65 },
    { id: 20, lastName: "132131", firstName: "Harvey", age: 65 },
  ];

  return (
    <Container>
      <TableComponent
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[15, 10, 5]}
      />
    </Container>
  );
};

export default ListOs;
