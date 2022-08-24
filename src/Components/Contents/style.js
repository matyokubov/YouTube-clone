import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 25px;
`;

export const Card = styled.div`
    color: #fff;
    width: 100%;
    min-height: 180px;
    >img{
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    >p{
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
`

export const Info = styled.div`
    display: flex;
    .channel{
        margin-right: 12px;
        cursor: pointer;
    }
    .title{
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 4px;
        cursor: pointer;
    }
    .views>span{
        margin-right: 4px;
    }
    .chname, span{
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
`