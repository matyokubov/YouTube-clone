import styled from "styled-components";
import { Item, ItemGroup, Videos } from "../../Sidebar/style"

export const Box = styled.div`
    display: inline-flex;
    flex-direction: column;
`

export const MenuItem = styled(Item)`

`

export const MenuItemGroup = styled(ItemGroup)`
    display: ${({show}) => show ? "auto" : "none"};
    position: absolute;
    z-index: 2;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 16px;
    padding-right: 36px;
    background-color: #212121;
`

export const MenuVideoIcon = styled(Videos)`

`

export const Wrapper = styled.div`
    position: relative;
    top: 15px;
    left: -1px;
`