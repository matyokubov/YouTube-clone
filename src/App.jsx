// Styled Components
import { Container, Wrapper } from './style';

// Components of App
import Contents from "./Components/Contents";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Tags from "./Components/Tags";

const App = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <Sidebar/>
                <Wrapper>
                    <Tags/>
                    <Contents/>
                </Wrapper>
            </Container>
        </>
    );
}

export default App;