import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 5px 8px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #0d6efd;
        color: #fff;
    }
`;

export const ButtonWarning = styled.button`
    background-color: #fff;
    color: #ffc107;
    padding: 5px 8px;
    border: 1px solid #ffc107;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #ffc107;
        color: #fff;
    }
`;

export const ButtonDanger = styled.button`
    background-color: #fff;
    color: #dc3545;
    padding: 5px 8px;
    border: 1px solid #dc3545;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #dc3545;
        color: #fff;
    }
`;