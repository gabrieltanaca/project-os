import styled from 'styled-components';

export const Titulo = styled.h1`
    font-family: "Monaco", monospace;
    color: Gray;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    padding: 8px;
`;

export const Table = styled.table`
    width: 100%;
    th{
        text-align: center;
        background-color: rgb(120, 120, 120);
        color: #3e3e3e;
        padding: 10px;
    }
    td{
        text-align: center;
        background-color: rgb(210, 210, 210);
        color: rgb(60, 60, 60);
        padding: 8px;
    }
`;
