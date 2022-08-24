import { createContext, useState } from "react";
import { movies } from "./mock";

export const ContextAPI = createContext()

export const Context = ({children}) => {
    const [videos, setVideos] = useState(movies);
    const [selectedTag, setSelectedTag] = useState("All");
    const [showSidebar, show] = useState(true);
    return (
        <ContextAPI.Provider value={{ videos, setVideos, selectedTag, setSelectedTag, showSidebar, show }}>
            {children}
        </ContextAPI.Provider>
    )
};