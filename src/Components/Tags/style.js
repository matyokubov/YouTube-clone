import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    background: #212121;
    column-gap: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const Tag = styled.button`
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 30px;
    padding: 5px 12px;
    color: ${({selected, tag})=> selected===tag ? '#000' : "#fff"};
    background-color: ${({selected, tag})=> selected===tag ? '#fff' : "rgba(255, 255, 255, 0.2)"};
    cursor: pointer;
    transition-duration: 350ms;
`