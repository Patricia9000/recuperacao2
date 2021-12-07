import styled from "styled-components"; 

const Div = styled.div`
    .container {
        padding: 25px 25px;
    }

    .titulo {
        font-size: 30px;
        font-weight: bolder;
        color: #1B0036;
    }

    .row {
        display: flex;
        flex-direcition: row;

        margin: 25px 0px;

        align-items: center;
    }

    .texto {
        font-size: 20px;
        color: #1B0036;

        margin-right: 8px;
    }

    .input input {
        padding: 5px;

        color: #1B0036;

        outline: none;
        border-radius: 5px;
        border-width: 1px;
        border-color: #1B0036;

        width: 407px;
    }

    .botao button {
        padding: 5px;
        margin: 0px 15px;

        border-width: 1px;
        border-radius: 5px;
        border-color: #1B0036;

        color: #1B0036;

        background-color: white;

        cursor: pointer;
    }

    .botao button:hover {
        background-color: #C6B1E3;
    }


    thead {
        background-color: #1B0036;
        color: white;
        font-size: 25px;
    }

    th {
        padding: 5px 10px;

        border-radius: 4px;
    }

    tbody {
        background-color: #C6B1E3;

        font-size: 19px;
    }

    td {
        padding: 5px;

        border-radius: 4px;
    }
`;

export { Div }