// Styled Components
import { Card, Container, Info } from './style';

// Use Database
import { useContext } from "react"
import { ContextAPI } from "../../Database/context"

// Profile image
import profileAvatar from "../../assets/profile/avatar.png"

const Component = () => {
    const {videos} = useContext(ContextAPI)
    return (
        <Container className='cards'>
            {
                videos.map(video => (
                    <Card key={video.id}>
                        <img src={video.url} alt={video.name}/>
                        <Info>
                            <div className="channel">
                                <img src={profileAvatar} alt="channel"/>
                            </div>
                            <div className="info">
                                <div className="title">{video.name}</div>
                                <div className="chname">{video.channel}</div>
                                <div className="views">
                                    <span>{video.views} views</span>
                                    <span>*</span>
                                    <span>{video.dateAgo}</span>
                                </div>
                            </div>
                        </Info>
                    </Card>
                ))
            }
        </Container>
    )
}

export default Component;