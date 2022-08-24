import styled from "styled-components";

// Icons
import { ReactComponent as home } from "../../assets/sidebar/home.svg"
import { ReactComponent as compass } from "../../assets/sidebar/compass.svg"
import { ReactComponent as followings } from "../../assets/sidebar/followings.svg"

import { ReactComponent as lib } from "../../assets/sidebar/lib.svg"
import { ReactComponent as history } from "../../assets/sidebar/history.svg"
import { ReactComponent as vids } from "../../assets/sidebar/vids.svg"
import { ReactComponent as recents } from "../../assets/sidebar/recents.svg"
import { ReactComponent as like } from "../../assets/sidebar/like.svg"
import { ReactComponent as chdown } from "../../assets/sidebar/chdown.svg"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #212121;
    height: 100vh;
    position: sticky;
    top: 0;
    transition-duration: 500ms;
    .lastItemGroup{
        border-bottom: 0;
    }
`;

export const ItemGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    >div{
        cursor: pointer;
    }
    >span{
        margin-left: 27px;
        margin-bottom: 8px;
        color: rgba(255, 255, 255, 0.6);
        transition-duration: 1s;
    }
`;

export const Item = styled.div`
    background-color: ${({selected})=>selected && "rgba(255, 255, 255, 0.2)"};
    display: flex;
    align-items: center;
    color: #fff;
    >div{
        display: inline;
        margin: 6px 0 6px 24px;
    }
    >span{
        margin-left: 26px;
        white-space: nowrap;
        transition-duration: 1s;
    }
`;

export const Home = styled(home)``

export const Compass = styled(compass)``

export const Followings = styled(followings)``

export const Library = styled(lib)``

export const History = styled(history)``

export const Videos = styled(vids)``

export const Recents = styled(recents)``

export const Likes = styled(like)``

export const ChervonDown = styled(chdown)``