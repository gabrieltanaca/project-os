import React from "react";
import TheadTable from "../../Components/theadTable";
import TbodyTable from "../../Components/tbodyTable";
import { Table, Titulo } from './styles';

const ListOs = () => {
    return (
        <>
            <Titulo>Lista de Ordem de Serviço</Titulo>
            <Table>
                <TheadTable />
                <TbodyTable />
            </Table>
        </>
    )
}

export default ListOs;