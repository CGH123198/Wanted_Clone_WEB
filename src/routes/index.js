import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from '../pages/pageLayout';
import IndexPage from "../pages";
import JobsFeedPage from "../pages/jobsfeed";
import WdListPage from '../pages/wdList';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />} >
                    <Route index element={<IndexPage />} />
                    <Route path="jobsfeed" element={<JobsFeedPage />} />
                    <Route path="wdlist" element={<WdListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;