import { useState } from "react"

// Styled Components
import { CreateIcon } from "../style"
import { Box, Wrapper, MenuItem, MenuItemGroup, MenuVideoIcon } from "./style"

const Component = () => {
    const [showBox, setShowBox] = useState(false)
    const toggle = () => setShowBox(!showBox)
    return (
        <Box>
            <CreateIcon onClick={toggle}/>
            <Wrapper>
                <MenuItemGroup show={showBox}>
                    <MenuItem>
                        <MenuVideoIcon/>
                        <span>Add video</span>
                    </MenuItem>
                </MenuItemGroup>
            </Wrapper>
        </Box>
    )
}

export default Component