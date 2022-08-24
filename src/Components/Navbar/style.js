import styled from "styled-components"

import { ReactComponent as burgerBtn } from "../../assets/burger-btn.svg"
import { ReactComponent as search } from "../../assets/search.svg"
import { ReactComponent as create } from "../../assets/create.svg"
import { ReactComponent as more } from "../../assets/more.svg"
import { ReactComponent as notifications } from "../../assets/notifications.svg"
import { ReactComponent as logo } from "../../assets/logo.svg"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    padding-right: 20px;
    background: #212121;
`

export const InputWrapper = styled.div`
    display: flex;
`

export const Input = styled.input`
    width: 575px;
    padding-left: 8px;
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.2);
    border-radius: 2px 0 0 2px;
    outline: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

export const AccPanel = styled.div`
    display: inline-flex;
    align-items: center;
    >*{
        margin-left: 32px;
    }
`

export const ProfileAvatar = styled.img`
    margin-left: 24px;
    cursor: pointer;
`

export const Search = styled.button`
    display: inline-flex;
    align-items: center;
    border: 0;
    border-radius: 0 2px 2px 0;
    background-color: rgba(255, 255, 255, 0.2);
`

export const Left = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 27px;
    margin-left: 27px;
    margin-right: 47px;
`

export const DropdownIcon = styled(burgerBtn)`
    cursor: pointer;
    height: 40px;
`

export const LogoIcon = styled(logo)`
    cursor: pointer;
`

export const SearchIcon = styled(search)`
    margin: 7px 24px;
`

export const CreateIcon = styled(create)`
    cursor: pointer;
`

export const MoreIcon = styled(more)`
    cursor: pointer;
`

export const NotificationsIcon = styled(notifications)`
    cursor: pointer;
`