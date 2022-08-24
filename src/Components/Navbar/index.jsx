// Styled Components
import { 
    Container,
    LogoIcon,
    DropdownIcon,
    InputWrapper, 
    Input, 
    Search, 
    SearchIcon, 
    AccPanel, 
    MoreIcon, 
    NotificationsIcon,
    ProfileAvatar,
    Left
} from "./style";

// Child Components
import Create from "./Create"

// Use Database
import { useContext } from "react"
import { movies } from "../../Database/mock";
import { ContextAPI } from "../../Database/context"

// Profile images
import profileAvatar from "../../assets/profile/avatar.png"

const Component = () => {
    const {setVideos, selectedTag, setSelectedTag, showSidebar, show} = useContext(ContextAPI)
    const onSearch = ({target}) => {
        let currentVideos = movies.filter((video)=>video.name.toLocaleLowerCase().includes(target.value.toLocaleLowerCase()))
        selectedTag !== "All" && setSelectedTag("All")
        setVideos(currentVideos)
    }
    const toggleShow = () => {
        show(!showSidebar)
    }
    return (
        <Container>
            <Left>
                <DropdownIcon onClick={toggleShow}/>
                <LogoIcon/>
            </Left>
            <InputWrapper>
                <Input type="text" placeholder="Search videos" onChange={onSearch}/>
                <Search>
                    <SearchIcon/>
                </Search>
            </InputWrapper>
            <AccPanel>
                <Create/>
                <MoreIcon/>
                <NotificationsIcon/>
                <ProfileAvatar src={profileAvatar}/>
            </AccPanel>
        </Container>
    )
}

export default Component;