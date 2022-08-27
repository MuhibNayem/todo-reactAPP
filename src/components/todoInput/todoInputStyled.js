import styled from "@emotion/styled";

export const Input = styled.input`
    outline: none;
    width: 260px;
    padding: 15px;
    margin-right: 25px;
    font-size: 20px;
    color: black;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0px 2px 1px gray;
    :hover {
        border: 3px solid black
    }
    :focus{
        background-color: white;
    }
` 
export const ButtonAdd = styled.button`
    width: 70px;
    padding: 15px 15px;
    font-size: 20px;
    border-radius: 10px;
    border: 0;
    background-color: crimson;
    cursor: pointer;
    box-shadow: 0px 2px 1px gray;
`