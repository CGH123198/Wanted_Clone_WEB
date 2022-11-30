import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from '../pages/pageLayout';
import IndexPage from "../pages";
import JobsFeedPage from "../pages/jobsfeed";
import WdListPage from '../pages/wdList';
import LoginPage from '../pages/auth/loginPage';
import RegisterPage from '../pages/auth/registerPage';
import PasswordPage from '../pages/auth/passwordPage';
import AuthPage from '../pages/auth';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />} >
                    <Route index element={<IndexPage />} />
                    <Route path="jobsfeed" element={<JobsFeedPage />} />
                    <Route path="wdlist" element={<WdListPage />} />
                </Route>
                <Route path="/auth" element={<AuthPage />} >
                    <Route path="login" element={<LoginPage />} />
                    <Route path="login/password" element={<PasswordPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;