import styled from "@emotion/styled/macro";

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
`

export const Icons = styled.div`
    display: none;
`

export const Li = styled.li`
    display: flex;
    margin: 20px 0;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    max-height: 30px;
    justify-content: space-between;

    :hover ${Icons} {
        display: flex;
    }

    :hover{
        border: 2px solid blue;
    }
`
export const List = styled.div`
    width: auto;
    height: auto;
    background-color: transparent;
    border: none;
    color: black;
    font-size: 20px;
    margin-right: 15px;
    text-decoration: ${(props) => props.completed === true ? "line-through; opacity:0.4" : "none"};
`

export const ButtonComplete = styled.button`
    color: green;
    font-size: 20px;
    cursor: pointer;
    margin-left: 50px;
    background-color: transparent;
    border: none;
    outline: none;
    display : ${(props) => props.completed === true ? "none" : ""}
`

export const ButtonDelete = styled.button`
    color: red;
    font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
    background-color: transparent;
    border: none;
    outline: none;
`