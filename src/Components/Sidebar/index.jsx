// Styled Components
import { Container, ItemGroup, Item, Home, Compass, Followings, Library, History, Videos, Recents, Likes, ChervonDown } from './style';

// Use Database
import { useContext } from "react"
import { ContextAPI } from "../../Database/context"

import profileAvatar from "../../assets/profile/avatar.png"

const Component = () => {
    const {showSidebar} = useContext(ContextAPI)
    return (
        <Container className={showSidebar ? "showSidebar" : "hideSidebar"}>
            <ItemGroup>
                <Item selected>
                    <div>
                        <Home/>
                    </div>
                    <span>Home</span>
                </Item>
                <Item>
                    <div>
                        <Compass/>
                    </div>
                    <span>Important</span>
                </Item>
                <Item>
                    <div>
                        <Followings/>
                    </div>
                    <span>Followings</span>
                </Item>
            </ItemGroup>
            <ItemGroup>
                <Item>
                    <div>
                        <Library/>
                    </div>
                    <span>Library</span>
                </Item>
                <Item>
                    <div>
                        <History/>
                    </div>
                    <span>View history</span>
                </Item>
                <Item>
                    <div>
                        <Videos/>
                    </div>
                    <span>My videos</span>
                </Item>
                <Item>
                    <div>
                        <Recents/>
                    </div>
                    <span>Recents</span>
                </Item>
                <Item>
                    <div>
                        <Likes/>
                    </div>
                    <span>Likes</span>
                </Item>
                <Item>
                    <div>
                        <ChervonDown/>
                    </div>
                    <span>More</span>
                </Item>
            </ItemGroup>
            <ItemGroup>
                <span>Subscriptions</span>
                <Item>
                    <div>
                        <img src={profileAvatar} alt="channel"/>
                    </div>
                    <span>Marvel UZ</span>
                </Item>
                <Item>
                    <div>
                        <img src={profileAvatar} alt="channel"/>
                    </div>
                    <span>Avengers Team</span>
                </Item>
            </ItemGroup>
            <ItemGroup className='lastItemGroup'>
                <Item>
                    <div>
                        <Compass/>
                    </div>
                    <span>YouTube Premium</span>
                </Item>
            </ItemGroup>
        </Container>
    )
}

export default Component;