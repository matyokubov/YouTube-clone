// Styled Components
import { Container, Tag } from "./style";

// Use Database
import { useContext } from "react"
import { ContextAPI } from "../../Database/context"
import { tags } from "./tags"
import { movies } from "../../Database/mock";

const Component = () => {
    const {setVideos, selectedTag, setSelectedTag} = useContext(ContextAPI)
    // const [] = useState("All")
    console.log(tags)
    const selectTag = (tag) => {
        let currentVideos = movies.filter((video)=>tag==="All" ? video : video.tags.includes(tag.toLocaleLowerCase()))
        setSelectedTag(tag)
        setVideos(currentVideos)
    }
    return (
        <Container>
            {
                tags.map((tag, i) => (
                    <Tag key={i} onClick={()=>selectTag(tag, i)} selected={selectedTag} tag={tag}>{tag}</Tag>
                ))
            }
        </Container>
    )
}

export default Component;