import React, { useState, useEffect } from 'react';
import { ButtonDanger, ButtonPrimary, ButtonWarning } from "./styles";

const TbodyTable = () => {

    const [data, setData] = useState([]);

    const getOs = async () => {
        fetch("http://localhost:44385/v1/OrderOfService")
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson.records),
            setData(responseJson.records)
        ));
    }
    
    useEffect(() => {
        getOs();
    }, [])

    return (
        <>
            <tbody>
                {Object.values(data).map(os => (
                    <tr key={os.id}>
                        <td>{os.dataOpeningaOS}</td>
                        <td>{os.os}</td>
                        <td>{os.city}</td>
                        <td>{os.address}</td>
                        <td>{os.neighborhood}</td>
                        <td>{os.number}</td>
                        <td>{os.complement}</td>
                        <td>{os.servicePerfomed}</td>
                        <td>{os.deadlineOS}</td>
                        <td>{os.finishedTask}</td>
                        <td>
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default TbodyTable;