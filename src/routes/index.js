import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from '../pages/pageLayout';
import IndexPage from "../pages"
import JobsFeedPage from "../pages/jobsfeed"

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />} >
                    <Route index element={<IndexPage />} />
                    <Route path="jobsfeed" element={<JobsFeedPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;